describe('CountingMinutes', function () {

  describe('when passing a well formated string', function () {

    it('expects to produce the correct conversion', function () {
      expect(CountingMinutes('9:00am-10:00am')).toEqual(60);
      expect(CountingMinutes('1:00pm-11:00am')).toEqual(1320);
    });

  });

  describe('when passing a empty string', function () {

    it('expects to throw "No String found" error', function () {
      expect( function() {
        CountingMinutes();
      }).toThrow('No string found');
    });

  });

  describe('when passing a not well formated string', function () {

    it('expects to throw "String not well formated" error', function () {
      expect( function () {
        CountingMinutes('dskljdsa');
      }).toThrow();
    });

  });

});


