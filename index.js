const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
]
// return the year result was a "W"
function superbowlWin(records) {
  const winningRecord = records.find(record => record.result === "W");
  if (winningRecord) {
    return winningRecord.year;
  }
}

record.find(superbowlWin);