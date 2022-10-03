// Automatically generated with Reach 0.1.12 (4ca32459)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (4ca32459)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Null;
  
  
  const v316 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v317 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v317, v316],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:52:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v317, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v321, v322], secs: v324, time: v323, didSend: v68, from: v320 } = txn1;
      
      sim_r.txns.push({
        amt: v321,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v333 = stdlib.safeAdd(v323, v322);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v321, v322], secs: v324, time: v323, didSend: v68, from: v320 } = txn1;
  ;
  const v333 = stdlib.safeAdd(v323, v322);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v333],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v320, v321, v322, v333],
      evt_cnt: 0,
      funcNum: 2,
      lct: v323,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v483, time: v482, didSend: v261, from: v481 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v320,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v483, time: v482, didSend: v261, from: v481 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:43:35:application',
      fs: ['at ./index.rsh:42:13:application call to [unknown function] (defined at: ./index.rsh:42:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:41:30:function exp)', 'at ./index.rsh:61:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v339, time: v338, didSend: v77, from: v337 } = txn2;
    const v341 = stdlib.add(v321, v321);
    ;
    let v342 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v343 = v338;
    let v350 = v341;
    
    let txn3 = txn2;
    while (await (async () => {
      const v358 = stdlib.eq(v342, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v358;})()) {
      const v365 = stdlib.safeAdd(v343, v322);
      const v369 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:69:48:application',
        fs: ['at ./index.rsh:68:19:application call to [unknown function] (defined at: ./index.rsh:68:23:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      const v370 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:70:70:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:68:19:application call to [unknown function] (defined at: ./index.rsh:68:23:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v371 = stdlib.digest([ctc0, ctc0], [v370, v369]);
      const v373 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:73:50:application',
        fs: ['at ./index.rsh:68:19:application call to [unknown function] (defined at: ./index.rsh:68:23:function exp)'],
        msg: 'getGuess',
        who: 'Alice'
        });
      const v374 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:74:72:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:68:19:application call to [unknown function] (defined at: ./index.rsh:68:23:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v375 = stdlib.digest([ctc0, ctc0], [v374, v373]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v320, v321, v322, v337, v350, v365, v371, v375],
        evt_cnt: 2,
        funcNum: 4,
        lct: v343,
        onlyIf: true,
        out_tys: [ctc1, ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v378, v379], secs: v381, time: v380, didSend: v109, from: v377 } = txn4;
          
          ;
          const v389 = stdlib.safeAdd(v380, v322);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v365],
        tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v320, v321, v322, v337, v350, v365],
          evt_cnt: 0,
          funcNum: 5,
          lct: v343,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v449, time: v448, didSend: v214, from: v447 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v337,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v449, time: v448, didSend: v214, from: v447 } = txn5;
        ;
        const v450 = stdlib.addressEq(v320, v447);
        const v451 = stdlib.addressEq(v337, v447);
        const v452 = v450 ? true : v451;
        stdlib.assert(v452, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:79:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:43:35:application',
          fs: ['at ./index.rsh:42:13:application call to [unknown function] (defined at: ./index.rsh:42:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:41:30:function exp)', 'at ./index.rsh:79:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v378, v379], secs: v381, time: v380, didSend: v109, from: v377 } = txn4;
        ;
        const v382 = stdlib.addressEq(v320, v377);
        stdlib.assert(v382, {
          at: './index.rsh:78:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v389 = stdlib.safeAdd(v380, v322);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v389],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v320, v321, v322, v337, v350, v378, v379, v389],
            evt_cnt: 0,
            funcNum: 7,
            lct: v380,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v431, time: v430, didSend: v180, from: v429 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v320,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc1, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v431, time: v430, didSend: v180, from: v429 } = txn6;
          ;
          const v432 = stdlib.addressEq(v320, v429);
          const v433 = stdlib.addressEq(v337, v429);
          const v434 = v432 ? true : v433;
          stdlib.assert(v434, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:90:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:43:35:application',
            fs: ['at ./index.rsh:42:13:application call to [unknown function] (defined at: ./index.rsh:42:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:41:30:function exp)', 'at ./index.rsh:90:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v396, v397], secs: v399, time: v398, didSend: v121, from: v395 } = txn5;
          ;
          const v400 = stdlib.addressEq(v337, v395);
          stdlib.assert(v400, {
            at: './index.rsh:89:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const txn6 = await (ctc.sendrecv({
            args: [v320, v321, v322, v337, v350, v378, v379, v396, v397, v370, v369, v374, v373],
            evt_cnt: 4,
            funcNum: 8,
            lct: v398,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:99:15:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v404, v405, v406, v407], secs: v409, time: v408, didSend: v133, from: v403 } = txn6;
              
              ;
              const v415 = stdlib.safeAdd(v405, v396);
              const v416 = stdlib.eq(v407, v415);
              const v417 = stdlib.eq(v407, v397);
              const v419 = v417 ? false : true;
              const v420 = v416 ? v419 : false;
              let v421;
              if (v420) {
                v421 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                const v423 = stdlib.eq(v397, v415);
                const v427 = v423 ? v419 : false;
                const v428 = v427 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                v421 = v428;
                }
              const cv342 = v421;
              const cv343 = v408;
              const cv350 = v350;
              
              await (async () => {
                const v342 = cv342;
                const v343 = cv343;
                const v350 = cv350;
                
                if (await (async () => {
                  const v358 = stdlib.eq(v342, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  return v358;})()) {
                  const v365 = stdlib.safeAdd(v343, v322);
                  sim_r.isHalt = false;
                  }
                else {
                  
                  const v469 = stdlib.eq(v342, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                  const v472 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:112:14:decimal', stdlib.UInt_max, '2'), v321);
                  const v474 = v469 ? v320 : v337;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v474,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [v404, v405, v406, v407], secs: v409, time: v408, didSend: v133, from: v403 } = txn6;
          ;
          const v410 = stdlib.addressEq(v320, v403);
          stdlib.assert(v410, {
            at: './index.rsh:99:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v411 = stdlib.digest([ctc0, ctc0], [v404, v405]);
          const v412 = stdlib.digestEq(v378, v411);
          stdlib.assert(v412, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:100:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Alice'
            });
          const v413 = stdlib.digest([ctc0, ctc0], [v406, v407]);
          const v414 = stdlib.digestEq(v379, v413);
          stdlib.assert(v414, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:101:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Alice'
            });
          const v415 = stdlib.safeAdd(v405, v396);
          const v416 = stdlib.eq(v407, v415);
          const v417 = stdlib.eq(v407, v397);
          const v419 = v417 ? false : true;
          const v420 = v416 ? v419 : false;
          let v421;
          if (v420) {
            v421 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
            }
          else {
            const v423 = stdlib.eq(v397, v415);
            const v427 = v423 ? v419 : false;
            const v428 = v427 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            v421 = v428;
            }
          const cv342 = v421;
          const cv343 = v408;
          const cv350 = v350;
          
          v342 = cv342;
          v343 = cv343;
          v350 = cv350;
          
          txn3 = txn6;
          continue;
          
          }
        
        }
      
      }
    stdlib.protect(ctc3, await interact.seeOutcome(v342), {
      at: './index.rsh:108:28:application',
      fs: ['at ./index.rsh:107:10:application call to [unknown function] (defined at: ./index.rsh:107:28:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    const v469 = stdlib.eq(v342, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v472 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:112:14:decimal', stdlib.UInt_max, '2'), v321);
    const v474 = v469 ? v320 : v337;
    ;
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v321, v322], secs: v324, time: v323, didSend: v68, from: v320 } = txn1;
  ;
  const v333 = stdlib.safeAdd(v323, v322);
  stdlib.protect(ctc1, await interact.acceptWager(v321), {
    at: './index.rsh:57:29:application',
    fs: ['at ./index.rsh:56:13:application call to [unknown function] (defined at: ./index.rsh:56:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v320, v321, v322, v333],
    evt_cnt: 0,
    funcNum: 1,
    lct: v323,
    onlyIf: true,
    out_tys: [],
    pay: [v321, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v339, time: v338, didSend: v77, from: v337 } = txn2;
      
      const v341 = stdlib.add(v321, v321);
      sim_r.txns.push({
        amt: v321,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v342 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v343 = v338;
      const v350 = v341;
      
      if (await (async () => {
        const v358 = stdlib.eq(v342, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v358;})()) {
        const v365 = stdlib.safeAdd(v343, v322);
        sim_r.isHalt = false;
        }
      else {
        
        const v469 = stdlib.eq(v342, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v472 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:112:14:decimal', stdlib.UInt_max, '2'), v321);
        const v474 = v469 ? v320 : v337;
        sim_r.txns.push({
          kind: 'from',
          to: v474,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v333],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v320, v321, v322, v333],
      evt_cnt: 0,
      funcNum: 2,
      lct: v323,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v483, time: v482, didSend: v261, from: v481 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v320,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v483, time: v482, didSend: v261, from: v481 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:43:35:application',
      fs: ['at ./index.rsh:42:13:application call to [unknown function] (defined at: ./index.rsh:42:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:41:30:function exp)', 'at ./index.rsh:61:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v339, time: v338, didSend: v77, from: v337 } = txn2;
    const v341 = stdlib.add(v321, v321);
    ;
    let v342 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v343 = v338;
    let v350 = v341;
    
    let txn3 = txn2;
    while (await (async () => {
      const v358 = stdlib.eq(v342, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v358;})()) {
      const v365 = stdlib.safeAdd(v343, v322);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v365],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v320, v321, v322, v337, v350, v365],
          evt_cnt: 0,
          funcNum: 5,
          lct: v343,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v449, time: v448, didSend: v214, from: v447 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v337,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v449, time: v448, didSend: v214, from: v447 } = txn5;
        ;
        const v450 = stdlib.addressEq(v320, v447);
        const v451 = stdlib.addressEq(v337, v447);
        const v452 = v450 ? true : v451;
        stdlib.assert(v452, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:79:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:43:35:application',
          fs: ['at ./index.rsh:42:13:application call to [unknown function] (defined at: ./index.rsh:42:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:41:30:function exp)', 'at ./index.rsh:79:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v378, v379], secs: v381, time: v380, didSend: v109, from: v377 } = txn4;
        ;
        const v382 = stdlib.addressEq(v320, v377);
        stdlib.assert(v382, {
          at: './index.rsh:78:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v389 = stdlib.safeAdd(v380, v322);
        const v393 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:86:56:application',
          fs: ['at ./index.rsh:85:17:application call to [unknown function] (defined at: ./index.rsh:85:21:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        const v394 = stdlib.protect(ctc0, await interact.getGuess(), {
          at: './index.rsh:87:58:application',
          fs: ['at ./index.rsh:85:17:application call to [unknown function] (defined at: ./index.rsh:85:21:function exp)'],
          msg: 'getGuess',
          who: 'Bob'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v320, v321, v322, v337, v350, v378, v379, v389, v393, v394],
          evt_cnt: 2,
          funcNum: 6,
          lct: v380,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:89:13:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v396, v397], secs: v399, time: v398, didSend: v121, from: v395 } = txn5;
            
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v389],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v320, v321, v322, v337, v350, v378, v379, v389],
            evt_cnt: 0,
            funcNum: 7,
            lct: v380,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v431, time: v430, didSend: v180, from: v429 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v320,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v431, time: v430, didSend: v180, from: v429 } = txn6;
          ;
          const v432 = stdlib.addressEq(v320, v429);
          const v433 = stdlib.addressEq(v337, v429);
          const v434 = v432 ? true : v433;
          stdlib.assert(v434, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:90:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:43:35:application',
            fs: ['at ./index.rsh:42:13:application call to [unknown function] (defined at: ./index.rsh:42:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:41:30:function exp)', 'at ./index.rsh:90:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v396, v397], secs: v399, time: v398, didSend: v121, from: v395 } = txn5;
          ;
          const v400 = stdlib.addressEq(v337, v395);
          stdlib.assert(v400, {
            at: './index.rsh:89:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v404, v405, v406, v407], secs: v409, time: v408, didSend: v133, from: v403 } = txn6;
          ;
          const v410 = stdlib.addressEq(v320, v403);
          stdlib.assert(v410, {
            at: './index.rsh:99:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v411 = stdlib.digest([ctc0, ctc0], [v404, v405]);
          const v412 = stdlib.digestEq(v378, v411);
          stdlib.assert(v412, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:100:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Bob'
            });
          const v413 = stdlib.digest([ctc0, ctc0], [v406, v407]);
          const v414 = stdlib.digestEq(v379, v413);
          stdlib.assert(v414, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:101:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Bob'
            });
          const v415 = stdlib.safeAdd(v405, v396);
          const v416 = stdlib.eq(v407, v415);
          const v417 = stdlib.eq(v407, v397);
          const v419 = v417 ? false : true;
          const v420 = v416 ? v419 : false;
          let v421;
          if (v420) {
            v421 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
            }
          else {
            const v423 = stdlib.eq(v397, v415);
            const v427 = v423 ? v419 : false;
            const v428 = v427 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            v421 = v428;
            }
          const cv342 = v421;
          const cv343 = v408;
          const cv350 = v350;
          
          v342 = cv342;
          v343 = cv343;
          v350 = cv350;
          
          txn3 = txn6;
          continue;
          
          }
        
        }
      
      }
    stdlib.protect(ctc1, await interact.seeOutcome(v342), {
      at: './index.rsh:108:28:application',
      fs: ['at ./index.rsh:107:10:application call to [unknown function] (defined at: ./index.rsh:107:28:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    const v469 = stdlib.eq(v342, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v472 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:112:14:decimal', stdlib.UInt_max, '2'), v321);
    const v474 = v469 ? v320 : v337;
    ;
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByANAAEIBSBQBwIomAEJWDAmAwEAAQEAIjUAMRhBBJMqZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJJQxAAiNJIQYMQAEhSSQMQADHJBJEIQo0ARJENARJIhJMNAISEUQoZClkUEk1A0lXACA1/4GgAVs1/kk1BUlKIls1/SRbNfyBEFs1+4EYWzX6gAR/ojtSNP0WUDT8FlA0+xZQNPoWULA0/zEAEkQ0A1dYIDT9FjT8FlABEkQ0A1d4IDT7FjT6FlABEkQ0/DQDIQlbCDX5NPo0/hM1+DT6NPkSNPgQQQAGIjX3QgAOIyEHNP40+RI0+BBNNfc0/zQDIQRbNAMhCFs0A1cwIDT3MgY0AyEFW0IC40ghBjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABOIbs6mwMgY0AyEJWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDIQVbsggjshA0/7IHs0IC70mBBgxAAKRIIQY0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yEEWzX+IQhbNf1XMCA1/CEFWzX7V1ggNfpXeCA1+Uk1BUkiWzX4JFs194AESiHL/DT4FlA09xZQsDIGNAMhCVsMRDT8MQASRDT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPgWUDT3FlAoSwFXAH9nKUsBV38pZ0ghCjUBMgY1AkICX0glNAESRDQESSISTDQCEhFEKGRJNQNXMCA1/4AEzJmSXLAyBjQDIQtbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMhBVuyCCOyEDT/sgezQgH0SSEHDEAA4EmBBAxAAJhIJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBFs1/iEIWzX9VzAgNfwhBVs1+0k1BUlXACA1+lcgIDX5gARgXaQrNPpQNPlQsDIGNAMhC1sMRDT/MQASRDIGNP0INfg0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlAoSwFXAH9nKUsBV38hZ0ghBjUBMgY1AkIBaSEHEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQxbD0SxIrIBNAMhBFuyCCOyEDQDVwAgsgezQgENSSMMQABISCM0ARJENARJIhJMNAISEUQoZEk1AyEEWzX/gASai5F0sDIGNAMhDFsMRDT/iAFENANXACA0/zQDIQhbMQAjMgY0/0kIQgBfSIGgjQaIASQiNAESRDQESSISTDQCEhFESTUFSSJbNf8kWzX+gASs0R/DNP8WUDT+FlCwNP+IAPQyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCAHs1/zX+Nf01/DX7Nfo1+TT9IxJBAC40/jT7CDX4NPk0+hZQNPsWUDT8UDT/FlA0+BZQKEsBVwBgZ0glNQEyBjUCQgA4sSKyASEHNPoLsggjshA0/DT5NP0iEk2yB7NCAAAxGSUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 168,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v321",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v322",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v321",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v322",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v378",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v379",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v396",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v397",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v405",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v406",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v407",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v378",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v379",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v396",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v397",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v405",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v406",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v407",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001c2e38038062001c2e8339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b6118b1806200037d6000396000f3fe60806040526004361061008f5760003560e01c80638e314769116100565780638e3147691461010a578063ab53f2c61461011d578063bf2c5b2414610140578063cc923b2914610153578063ebdbfdcc1461016657005b80631e93b0f11461009857806321642639146100bc5780632c10a159146100cf5780637eea518c146100e257806383230757146100f557005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca36600461142f565b610179565b6100966100dd366004611452565b610427565b6100966100f0366004611452565b6105b6565b34801561010157600080fd5b506001546100a9565b610096610118366004611452565b610734565b34801561012957600080fd5b506101326108cf565b6040516100b3929190611464565b61009661014e366004611452565b61096c565b6100966101613660046114c1565b610b03565b61009661017436600461142f565b610e0e565b610189600760005414601c6110aa565b6101a38135158061019c57506001548235145b601d6110aa565b6000808055600280546101b5906114d3565b80601f01602080910402602001604051908101604052809291908181526020018280546101e1906114d3565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b5050505050806020019051810190610246919061155c565b90506102598160e001514310601e6110aa565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f338360405161028a929190611608565b60405180910390a161029e3415601a6110aa565b60608101516102b9906001600160a01b03163314601b6110aa565b61031a60405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b0390811682526020808401518184015260408085015181850152606080860151909316928401929092526080808501519084015260a0808501519084015260c080850151908401528481013560e08401528482013561010084015260096000554360015590516103fd9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b604051602081830303815290604052600290805190602001906104219291906112e8565b50505050565b61043760016000541460096110aa565b6104518135158061044a57506001548235145b600a6110aa565b600080805560028054610463906114d3565b80601f016020809104026020016040519081016040528092919081815260200182805461048f906114d3565b80156104dc5780601f106104b1576101008083540402835291602001916104dc565b820191906000526020600020905b8154815290600101906020018083116104bf57829003601f168201915b50505050508060200190518101906104f49190611639565b905061050781606001514310600b6110aa565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516105389291906116b2565b60405180910390a16105518160200151341460086110aa565b61055961136c565b815181516001600160a01b03909116905260208083018051835183015260408085015184519091015282513360609091015281830180516001905251439201919091525180016020820151604001526105b1816110d0565b505050565b6105c6600160005414600d6110aa565b6105e0813515806105d957506001548235145b600e6110aa565b6000808055600280546105f2906114d3565b80601f016020809104026020016040519081016040528092919081815260200182805461061e906114d3565b801561066b5780601f106106405761010080835404028352916020019161066b565b820191906000526020600020905b81548152906001019060200180831161064e57829003601f168201915b50505050508060200190518101906106839190611639565b90506106978160600151431015600f6110aa565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516106c89291906116b2565b60405180910390a16106dc3415600c6110aa565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610719573d6000803e3d6000fd5b5060008080556001819055610730906002906113c5565b5050565b61074460056000541460176110aa565b61075e8135158061075757506001548235145b60186110aa565b600080805560028054610770906114d3565b80601f016020809104026020016040519081016040528092919081815260200182805461079c906114d3565b80156107e95780601f106107be576101008083540402835291602001916107e9565b820191906000526020600020905b8154815290600101906020018083116107cc57829003601f168201915b505050505080602001905181019061080191906116ef565b90506108158160a0015143101560196110aa565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516108469291906116b2565b60405180910390a161085a341560156110aa565b805161088e906001600160a01b031633146108845760608201516001600160a01b03163314610887565b60015b60166110aa565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610719573d6000803e3d6000fd5b6000606060005460028080546108e4906114d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610910906114d3565b801561095d5780601f106109325761010080835404028352916020019161095d565b820191906000526020600020905b81548152906001019060200180831161094057829003601f168201915b50505050509050915091509091565b61097c60076000541460216110aa565b6109968135158061098f57506001548235145b60226110aa565b6000808055600280546109a8906114d3565b80601f01602080910402602001604051908101604052809291908181526020018280546109d4906114d3565b8015610a215780601f106109f657610100808354040283529160200191610a21565b820191906000526020600020905b815481529060010190602001808311610a0457829003601f168201915b5050505050806020019051810190610a39919061155c565b9050610a4d8160e0015143101560236110aa565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610a7e9291906116b2565b60405180910390a1610a923415601f6110aa565b8051610ac6906001600160a01b03163314610abc5760608201516001600160a01b03163314610abf565b60015b60206110aa565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610719573d6000803e3d6000fd5b610b1360096000541460286110aa565b610b2d81351580610b2657506001548235145b60296110aa565b600080805560028054610b3f906114d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610b6b906114d3565b8015610bb85780601f10610b8d57610100808354040283529160200191610bb8565b820191906000526020600020905b815481529060010190602001808311610b9b57829003601f168201915b5050505050806020019051810190610bd09190611783565b9050610bf8604051806060016040528060008152602001600015158152602001600081525090565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fc7e07aa759791812e0e03fb583c5fbed2f43e8adb4535b4faa695e77e84ea4fe9060c00160405180910390a1610c6b341560246110aa565b8151610c83906001600160a01b0316331460256110aa565b60408051610ccf91610ca991602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a001511460266110aa565b604080516060858101356020830152608086013592820192909252610d1591016040516020818303038152906040528051906020012060001c8360c001511460276110aa565b610d2a83602001602001358360e00151611236565b8152610100820151608084013514610d43576001610d46565b60005b151560208201528051608084013514610d60576000610d66565b80602001515b15610d775760006040820152610da5565b805161010083015114610d8b576000610d91565b80602001515b610d9c576001610d9f565b60025b60408201525b610dad61136c565b825181516001600160a01b0391821690526020808501518351820152604080860151845182015260608087015185519416930192909252838201518184018051919091528051439201919091526080850151905190910152610421816110d0565b610e1e60056000541460126110aa565b610e3881351580610e3157506001548235145b60136110aa565b600080805560028054610e4a906114d3565b80601f0160208091040260200160405190810160405280929190818152602001828054610e76906114d3565b8015610ec35780601f10610e9857610100808354040283529160200191610ec3565b820191906000526020600020905b815481529060010190602001808311610ea657829003601f168201915b5050505050806020019051810190610edb91906116ef565b9050610ef36040518060200160405280600081525090565b610f048260a00151431060146110aa565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a3384604051610f35929190611608565b60405180910390a1610f49341560106110aa565b8151610f61906001600160a01b0316331460116110aa565b610f6f438360400151611236565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e0840152600760005543600155905161107f9183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b604051602081830303815290604052600290805190602001906110a39291906112e8565b5050505050565b816107305760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516020810190915260008152602082015151600114156111d557611107826020015160200151836000015160400151611236565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e0016103fd565b602082015151156111eb578151606001516111ef565b8151515b6001600160a01b03166108fc61120e6002856000015160200151611289565b6040518115909202916000818181858888f19350505050158015610719573d6000803e3d6000fd5b6000826112438382611822565b91508110156112835760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016110c7565b92915050565b60008115806112ad5750828261129f818361183a565b92506112ab9083611859565b145b6112835760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016110c7565b8280546112f4906114d3565b90600052602060002090601f016020900481019282611316576000855561135c565b82601f1061132f57805160ff191683800117855561135c565b8280016001018555821561135c579182015b8281111561135c578251825591602001919060010190611341565b50611368929150611402565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016113c060405180606001604052806000815260200160008152602001600081525090565b905290565b5080546113d1906114d3565b6000825580601f106113e1575050565b601f0160209004906000526020600020908101906113ff9190611402565b50565b5b808211156113685760008155600101611403565b60006060828403121561142957600080fd5b50919050565b60006060828403121561144157600080fd5b61144b8383611417565b9392505050565b60006040828403121561142957600080fd5b82815260006020604081840152835180604085015260005b818110156114985785810183015185820160600152820161147c565b818111156114aa576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561142957600080fd5b600181811c908216806114e757607f821691505b6020821081141561142957634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff8111828210171561153a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461155757600080fd5b919050565b600061010080838503121561157057600080fd5b6040519081019067ffffffffffffffff821181831017156115a157634e487b7160e01b600052604160045260246000fd5b816040526115ae84611540565b815260208401516020820152604084015160408201526115d060608501611540565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b03831681526080810161144b60208301848035825260208082013590830152604090810135910152565b60006080828403121561164b57600080fd5b6040516080810181811067ffffffffffffffff8211171561167c57634e487b7160e01b600052604160045260246000fd5b60405261168883611540565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146116e057600080fd5b80604085015250509392505050565b600060c0828403121561170157600080fd5b60405160c0810181811067ffffffffffffffff8211171561173257634e487b7160e01b600052604160045260246000fd5b60405261173e83611540565b8152602083015160208201526040830151604082015261176060608401611540565b60608201526080830151608082015260a083015160a08201528091505092915050565b6000610120828403121561179657600080fd5b61179e611508565b6117a783611540565b815260208301516020820152604083015160408201526117c960608401611540565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156118355761183561180c565b500190565b60008160001904831182151516156118545761185461180c565b500290565b60008261187657634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220faeb2266cda3ba5ff7e67c6ab16ffe4f42d1db138e31fafdeb6aa4b4d42781dd64736f6c634300080c0033`,
  BytecodeLen: 7214,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:54:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:61:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:113:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:66:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:79:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:80:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:90:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:91:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
