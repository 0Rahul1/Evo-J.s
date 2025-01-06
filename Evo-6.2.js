// Analyzing Voters Participation 
function analyzeVoterData(voters) {
  return voters.reduce((stats, { age, voted }) => {
      if (age >= 18 && age <= 25) {
          stats.numYoungPeople++;
          if (voted) stats.numYoungVotes++;
      } else if (age >= 26 && age <= 35) {
          stats.numMidsPeople++;
          if (voted) stats.numMidVotesPeople++;
      } else if (age >= 36) {
          stats.numOldsPeople++;
          if (voted) stats.numOldVotesPeople++;
      }
      return stats;
  }, {
      numYoungVotes: 0, numYoungPeople: 0, numMidVotesPeople: 0,
      numMidsPeople: 0, numOldVotesPeople: 0, numOldsPeople: 0,
  });
}
const voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

console.log(analyzeVoterData(voters));