function PatternChaser (str) {

  if (!str) {
    throw 'No string found';
  }

  var combinations = [];
  var results = [];
  var flatten = [];
  var charArray = str.split('');

  for (var j = 0; j < charArray.length; j++) {

    var slicedArray = charArray.slice(j);

    for (var i = 0; i < slicedArray.length; i++) {
      var res = slicedArray.slice(0, i);

      if (res.length > 1) {
        combinations.push(res.join(''));
      }
    }
  }

  flatten = [].concat.apply([], combinations);

  for (var i = 0; i < flatten.length; i++) {

    var value = flatten[i];
    var regex = new RegExp('(%s)'.replace('%s', value), 'g');
    var matches = str.match(regex);

    if (matches.length > 1 && results.indexOf(value) === -1) {
      results.push(value);
    }
  }

  var isParternFound = results.length ? 'yes' : 'no';

  if (!results.length) {
    return isParternFound + ' ' + null;
  }

  return isParternFound + ' ' + results.reduce(function(previousValue, currentValue) {

    if (previousValue.length > currentValue.length) {
      return  previousValue;
    } else {
      return currentValue;
    }

  });


};

