'reach 0.1'

const [isOutcome, ALICE_WINS, DRAW, BOB_WINS] = makeEnum(3);

const handTotal = (handAlice, handBob) => (handAlice + handBob);
const isEqual = (guessAlice, guessBob) => (guessAlice == guessBob ? true : false);
const winner = (handAlice, handBob, guessAlice, guessBob) => (
    guessAlice == handTotal(handAlice, handBob) && !isEqual(guessAlice, guessBob) ? ALICE_WINS :
    guessBob == handTotal(handAlice, handBob) && !isEqual(guessAlice, guessBob) ? BOB_WINS :
    DRAW
);

forall(UInt, handAlice => 
    forall(UInt, handBob =>
        forall(UInt, guessAlice =>
            forall(UInt, guessBob =>
                assert(isOutcome(winner(handAlice, handBob, guessAlice, guessBob)))))));

const Player = {
    ...hasRandom,
    getHand: Fun([], UInt),
    getGuess: Fun([], UInt),
    seeOutcome: Fun([UInt], Null),
    informTimeout: Fun([], Null),
}

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        ...Player,
        wager: UInt,
        deadline: UInt,
    });

    const Bob = Participant('Bob', {
        ...Player,
        acceptWager: Fun([UInt], Null),
    });

    init();

    const informTimeout = () => {
        each([Alice, Bob], () => {
            interact.informTimeout();
        })
    }

    Alice.only(() => {
        const amount = declassify(interact.wager);
        const deadline = declassify(interact.deadline);
    })

    Alice.publish(amount, deadline)
        .pay(amount);
    commit();

    Bob.only(() => {
        interact.acceptWager(amount);
    })

    Bob.pay(amount)
        .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

    var outcome = DRAW;
    invariant(balance() == 2 * amount && isOutcome(outcome))
    while(outcome == DRAW){
        commit();

        Alice.only(() => {
            const _handAlice = interact.getHand();
            const [_commitHandAlice, _saltHandAlice] = makeCommitment(interact, _handAlice);
            const commitHandAlice = declassify(_commitHandAlice);
    
            const _guessAlice = interact.getGuess();
            const [_commitGuessAlice, _saltGuessAlice] = makeCommitment(interact, _guessAlice);
            const commitGuessAlice = declassify(_commitGuessAlice);
        })
    
        Alice.publish(commitHandAlice, commitGuessAlice)
            .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
        commit();
    
        unknowable(Bob, Alice(_handAlice, _saltHandAlice));
        unknowable(Bob, Alice(_guessAlice, _saltGuessAlice));
    
        Bob.only(() => {
            const handBob = declassify(interact.getHand());
            const guessBob = declassify(interact.getGuess());    
        })
        Bob.publish(handBob, guessBob)
            .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
        commit()
    
        Alice.only(() => {
            const saltHandAlice = declassify(_saltHandAlice);
            const handAlice = declassify(_handAlice);
            const saltGuessAlice = declassify(_saltGuessAlice);
            const guessAlice = declassify(_guessAlice);
        })
        Alice.publish(saltHandAlice, handAlice, saltGuessAlice, guessAlice);
        checkCommitment(commitHandAlice, saltHandAlice, handAlice);
        checkCommitment(commitGuessAlice, saltGuessAlice, guessAlice);

        outcome = winner(handAlice, handBob, guessAlice, guessBob);
        continue;
    }

    each ([Alice, Bob], () => {
        interact.seeOutcome(outcome);
    })
    
    assert(outcome == ALICE_WINS || outcome == BOB_WINS);
    transfer(2 * amount).to(outcome == ALICE_WINS ? Alice : Bob);
    commit();
})