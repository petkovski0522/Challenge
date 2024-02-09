const voters = [
    ["Antonio", true, 5],
    ["Marija", false],
    ["Darko", true, 3],
    ["John", false],
    ["Sara", true, 2]
  ];
  
  const name = prompt("Enter a name:");

  function findVoter(name) {
    for (let i = 0; i < voters.length; i++) {
      if (voters[i][0] === name) {
        return voters[i];
      }
    }
    return null;
  }
  
  function printVoterDetails(name) {
    const voter = findVoter(name);
    const voterDetails = document.getElementById("voter-details");
    if (voter) {
      const [name, voted, grade] = voter;
      voterDetails.innerHTML = `
        <p> ${name}</p>
        <p> ${voted ? "Voted!" : "Didn't vote"}</p>
        ${voted ? `<p> ${grade}</p>` : ""}
      `;
    } else {
      voterDetails.innerHTML = "<p>Voter not found</p>";
    }
  }
  
  
  printVoterDetails(name);
  