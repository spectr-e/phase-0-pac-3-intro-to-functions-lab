function shout(a) {
  return a.toUpperCase();
}
function whisper(a) {
  return a.toLowerCase();
}
function logShout(a) {
  console.log(a.toUpperCase());
}
function logWhisper(a) {
  console.log(a.toLowerCase());
}
function sayHiToHeadphonedRoommate (a) {
  if (a === a.toLowerCase()) {
    return "I can't hear you!";
  } else if (a === a.toUpperCase()) {
    return "YES INDEED!";
  } else if (a === "Let's have dinner together!") {
    return "I would love to!";
  }
}

