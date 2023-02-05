/* 16 card combinations */
/**logic:
 * the winning card combination listed all the possible outcome when the card that participants
 * picked (color[0]) is more than the color they did not pick (color[1]).
 * the losing card combination listed all the possible outcome when the card that participants
 * picked (color[0]) is less than the color they did not pick (color[1]).
 *
 * 0 represent win result.
 * 1 represent lose result.
 */
const win_card_comb = [
  {
    card1: () => color[0],
    card2: () => color[0],
    card3: () => color[0],
    card4: () => color[0],
    card5: () => color[0],
    result: 0,
    id: 1,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[1],
    card2: () => color[0],
    card3: () => color[0],
    card4: () => color[0],
    card5: () => color[0],
    result: 0,
    id: 2,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[0],
    card2: () => color[1],
    card3: () => color[0],
    card4: () => color[0],
    card5: () => color[0],
    result: 0,
    id: 3,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[0],
    card2: () => color[0],
    card3: () => color[1],
    card4: () => color[0],
    card5: () => color[0],
    result: 0,
    id: 4,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[0],
    card2: () => color[0],
    card3: () => color[0],
    card4: () => color[1],
    card5: () => color[0],
    result: 0,
    id: 5,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[0],
    card2: () => color[0],
    card3: () => color[0],
    card4: () => color[0],
    card5: () => color[1],
    result: 0,
    id: 6,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[1],
    card2: () => color[1],
    card3: () => color[0],
    card4: () => color[0],
    card5: () => color[0],
    result: 0,
    id: 7,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[1],
    card2: () => color[0],
    card3: () => color[1],
    card4: () => color[0],
    card5: () => color[0],
    result: 0,
    id: 8,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[1],
    card2: () => color[0],
    card3: () => color[0],
    card4: () => color[1],
    card5: () => color[0],
    result: 0,
    id: 9,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[1],
    card2: () => color[0],
    card3: () => color[0],
    card4: () => color[0],
    card5: () => color[1],
    result: 0,
    id: 10,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[0],
    card2: () => color[1],
    card3: () => color[1],
    card4: () => color[0],
    card5: () => color[0],
    result: 0,
    id: 11,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[0],
    card2: () => color[1],
    card3: () => color[0],
    card4: () => color[1],
    card5: () => color[0],
    result: 0,
    id: 12,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[0],
    card2: () => color[1],
    card3: () => color[0],
    card4: () => color[0],
    card5: () => color[1],
    result: 0,
    id: 13,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[0],
    card2: () => color[0],
    card3: () => color[1],
    card4: () => color[1],
    card5: () => color[0],
    result: 0,
    id: 14,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[0],
    card2: () => color[0],
    card3: () => color[1],
    card4: () => color[0],
    card5: () => color[1],
    result: 0,
    id: 15,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[0],
    card2: () => color[0],
    card3: () => color[0],
    card4: () => color[1],
    card5: () => color[1],
    result: 0,
    id: 16,
    catch: false,
    catch_n: 0,
  },
];

const lose_card_comb = [
  {
    card1: () => color[1],
    card2: () => color[1],
    card3: () => color[1],
    card4: () => color[1],
    card5: () => color[1],
    result: 1,
    id: 17,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[0],
    card2: () => color[1],
    card3: () => color[1],
    card4: () => color[1],
    card5: () => color[1],
    result: 1,
    id: 18,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[1],
    card2: () => color[0],
    card3: () => color[1],
    card4: () => color[1],
    card5: () => color[1],
    result: 1,
    id: 19,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[1],
    card2: () => color[1],
    card3: () => color[0],
    card4: () => color[1],
    card5: () => color[1],
    result: 1,
    id: 20,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[1],
    card2: () => color[1],
    card3: () => color[1],
    card4: () => color[0],
    card5: () => color[1],
    result: 1,
    id: 21,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[1],
    card2: () => color[1],
    card3: () => color[1],
    card4: () => color[1],
    card5: () => color[0],
    result: 1,
    id: 22,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[0],
    card2: () => color[0],
    card3: () => color[1],
    card4: () => color[1],
    card5: () => color[1],
    result: 1,
    id: 23,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[0],
    card2: () => color[1],
    card3: () => color[0],
    card4: () => color[1],
    card5: () => color[1],
    result: 1,
    id: 24,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[0],
    card2: () => color[1],
    card3: () => color[1],
    card4: () => color[0],
    card5: () => color[1],
    result: 1,
    id: 25,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[0],
    card2: () => color[1],
    card3: () => color[1],
    card4: () => color[1],
    card5: () => color[0],
    result: 1,
    id: 26,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[1],
    card2: () => color[0],
    card3: () => color[0],
    card4: () => color[1],
    card5: () => color[1],
    result: 1,
    id: 27,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[1],
    card2: () => color[0],
    card3: () => color[1],
    card4: () => color[0],
    card5: () => color[1],
    result: 1,
    id: 28,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[1],
    card2: () => color[0],
    card3: () => color[1],
    card4: () => color[1],
    card5: () => color[0],
    result: 1,
    id: 29,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[1],
    card2: () => color[1],
    card3: () => color[0],
    card4: () => color[0],
    card5: () => color[1],
    result: 1,
    id: 30,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[1],
    card2: () => color[1],
    card3: () => color[0],
    card4: () => color[1],
    card5: () => color[0],
    result: 1,
    id: 31,
    catch: false,
    catch_n: 0,
  },
  {
    card1: () => color[1],
    card2: () => color[1],
    card3: () => color[1],
    card4: () => color[0],
    card5: () => color[0],
    result: 1,
    id: 32,
    catch: false,
    catch_n: 0,
  },
];

/** create a shuffled array that contain the outcome info of all 80 trials,
 * each time it will generate an equal number of win and lose trials for each of the 16 card combination sequence
 * 16 card combs will appear twice in each of the 40 win or lose trials,
 * the first 8 card combs will appear one more time (not sure if we want to randomize this part)
 **/
function makeItForty(comb) {
  // helper function: duplicate the array and append the first half of the array to the resulting array
  const comb_clone = comb.map((object) => ({ ...object })); // not sure how this one works, but before I was encountering problems when try to assign catch trials to card combination. Since the copy I made before only copy the reference and not the actual objects, it will assign catch trials to all the copies in the final outcome
  var comb_copy = comb.concat(comb_clone);
  var half_clone = [
    comb[4],
    comb[12],
    comb[7],
    comb[2],
    comb[13],
    comb[9],
    comb[1],
    comb[15],
  ];
  const half = half_clone.map((object) => ({ ...object })); // as as before
  var forty_array = comb_copy.concat(half);

  return forty_array;
}

function shuffleOutcome(jsPsych) {
  // create and shuffle card outcomes
  var outcome = [];
  var all_wcard_comb = makeItForty(win_card_comb);
  var all_lcard_comb = makeItForty(lose_card_comb);

  outcome = all_wcard_comb.concat(all_lcard_comb);

  // shuffle the determined outcomes
  var shuffled_outcome = jsPsych.randomization.shuffle(outcome);
  return shuffled_outcome;
}

function createCatch(which_card) {
  var random_draws = [
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
  ]
  return {
    card1: () => color[random_draws[0]],
    card2: () => color[random_draws[1]],
    card3: () => color[random_draws[2]],
    card4: () => color[random_draws[3]],
    card5: () => color[random_draws[4]],
    result: null,
    id: 33,
    catch: true,
    catch_n: which_card,
  };
}

function createStimulusSet(jsPsych) {
  var all80trials = shuffleOutcome(jsPsych); // array of arrays of all the card results
  var pre_catch_outcome = [];
  pre_catch_outcome[0] = all80trials.slice(0, 16);
  pre_catch_outcome[1] = all80trials.slice(16, 32);
  pre_catch_outcome[2] = all80trials.slice(32, 48);
  pre_catch_outcome[3] = all80trials.slice(48, 64);
  pre_catch_outcome[4] = all80trials.slice(64, 80);

  var catch_trials = [];
  for (var i = 0; i < 5; i++) {
    catch_trials[i] = createCatch(i + 1);
  }
  catch_trials = jsPsych.randomization.shuffle(catch_trials);

  for (var i = 0; i < 5; i++) {
    pre_catch_outcome[i].unshift(catch_trials[i]);
    //pre_catch_outcome[i] = jsPsych.randomization.shuffle(pre_catch_outcome[i]);
  }

  return pre_catch_outcome;
}
