function stringMerge (str) {
  return str.replace(/(.)\1*/g, function(seq, p1) {
    return seq.length.toString() + p1;
  });
}

function LookAndSay (str) {

  if (isNaN(str)) {
    throw ('Invalid Number');
  }

  var i;
  var LookAndSayArray = [];
  for (i = 10; i > 0; i--) {
    str = stringMerge(str);
    LookAndSayArray.push(str);
  }
  return LookAndSayArray;
}
