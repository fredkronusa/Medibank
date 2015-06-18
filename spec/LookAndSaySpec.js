describe('LookAndSay', function () {

  describe('when passing a valid number', function () {

    it('expects results lenght to be 10', function () {
      expect(LookAndSay('1').length).toEqual(10);
    });

  });

  describe('when passing a invalid string', function () {

    it('expects to throw "String not well formated" error', function () {
      expect(function () {
        LookAndSay('dskljdsa');
      }).toThrow();
    });

  });

});


