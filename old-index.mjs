import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);

const format = (x) => stdlib.formatCurrency(x, 3);
const getBalance = async (who) => format(await stdlib.balanceOf(who)); 
const beforeAlice = await getBalance(accAlice);
const beforeBob = await getBalance(accBob);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const OUTCOME = ['Alice wins!', 'Draw!', 'Bob wins!'];
const Player = (who) => ({
    ...stdlib.hasRandom,

    getHand: () => {
        const hand = Math.floor(Math.random() * 3); // 0,1,2
        console.log(`${who} played ${hand}.`)
        return hand;
    }, 

    getGuess: () => {
        const guess = Math.floor(Math.random() * 5); // 0,1,2,3,4
        console.log(`${who} guessed ${guess}.`)
        return guess;
    },

    seeOutcome: (outcome) => {
        console.log(`${who} sees ${OUTCOME[outcome]}`);
    },

    informTimeout: () => {
        console.log(`${Who} observed a timeout.`);
    },
})

await Promise.all ([
    ctcAlice.p.Alice({
        ...Player('Alice'),
        wager: stdlib.parseCurrency(5),
        deadline: 10,
    }),

    ctcBob.p.Bob({
        ...Player('Bob'),
        acceptWager: (amount) => {
            console.log(`Bob accept the wager of ${format(amount)}.`)
        }
    })
]);

const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);
console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
console.log(`Bob went from ${beforeBob} to ${afterBob}.`);