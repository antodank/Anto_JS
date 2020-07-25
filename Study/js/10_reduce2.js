const voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
  ]

  const initialVotes = {
    youngVoted: 0,
    youth: 0,
    midVoted: 0,
    mids: 0,
    oldVoted: 0,
    olds: 0,
  }

  const peersToVotePeers = {
    youth: "youngVoted",
    mids: "midVoted",
    olds: "oldVoted",
  }

  const voterlist = voters.reduce((acc, voter) => {
    if(voter.age < 26){
      peers = "youth"
    } else if (voter.age < 36) {
      peers = "mids"
    } else {
      peers = "olds"
    }
    if (!voter.voted) {
      // if they didn't vote let's just increment their peers
      // for example for  { name: "Zack", age: 19, voted: false }
      // The peer group would be "youth" and we'd increment acc["youth"] by one
      return { ...acc, [peers]: acc[peers] + 1 }
    } else {
      const votePeers = peersToVotePeers[peers];
      // for example for { name: "Jeff", age: 30, voted: true }
      // The peer group would is "mids"
      // acc["mids"] and acc["midVotes"] are both incremented by one
      return {
        ...acc,
        [peers]: acc[peers] + 1,
        [votePeers]: acc[votePeers] + 1,
      }
    }
  }, initialVotes)
  
  console.log(voterlist);