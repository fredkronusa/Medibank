function CountingMinutes(str) {

  if (!str) {
    throw 'No string found';
  }

  var dateFrom = new Date();
  var dateTo = new Date();
  var timeSplit = str.split('-');
  var diffInMilliseconds;
  var diffInMinutes;

  try {

    //convert strings into time parts
    for (var t in timeSplit) {

      var time = timeSplit[t],
      parts = time.match(/(\d+)\:(\d+)(\w+)/),
      hours = /am/i.test(parts[3]) ? parseInt(parts[1], 10) : parseInt(parts[1], 10) + 12,
      minutes = parseInt(parts[2], 10);
      seconds = 0;

      if (t === "0") {

        dateFrom.setHours(hours);
        dateFrom.setMinutes(minutes);
        dateFrom.setSeconds(seconds);

      } else {

        dateTo.setHours(hours);
        dateTo.setMinutes(minutes);
        dateTo.setSeconds(seconds);

      }

    }

  } catch (exception) {
    throw 'String not well formated' + exception;
  }

  diffInMilliseconds = dateTo - dateFrom;

  //make sure to add a day if dateFrom is negative
  if (diffInMilliseconds < 0) {
  dateTo.setDate(dateTo.getDate() + 1);
  diffInMilliseconds = dateTo - dateFrom;
  }

  diffInMinutes = Math.floor(diffInMilliseconds / 1000 / 60);

  return (diffInMinutes);

}
