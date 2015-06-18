describe('PatternChaser', function () {

	describe('when passing a string "aabecaa"', function () {

		it('expects the pattern to be "aa"', function () {
			expect(PatternChaser('aabecaa')).toEqual('yes aa');
		});

	});

	describe('when passing a string "abbbaac"', function () {

		it('expects no pattern to be found', function () {
			expect(PatternChaser('abbbaac')).toEqual('no null');
		});

	});

	describe('when passing a string "aabejiabkfabed"', function () {

		it('expects the pattern to be "abe"', function () {
			expect(PatternChaser('aabejiabkfabed')).toEqual('yes abe');
		});

	});

	describe('when passing a string with a pattern "123224"', function () {

		it('expects no pattern to be found', function () {
			expect(PatternChaser('123224')).toEqual('no null');
		});

	});

	describe('when passing a string "aa2bbbaacbbb"', function () {

		it('expects the pattern to be "bbb"', function () {
			expect(PatternChaser('aa2bbbaacbbb')).toEqual('yes bbb');
		});

		it('expects only the largest pattern to be found', function () {
			expect(PatternChaser('aa2bbbaacbbb')).not.toEqual('yes aa');
		});

	});

	describe('when a result is given, it should containg YES or NO', function() {

		it('expects the result to contain YES', function () {
			expect(PatternChaser('aa2bbbaacbbb')).toContain('yes');
		});

		it('expects the result to contain NO', function () {
			expect(PatternChaser('123456789')).toContain('no');
		});

	});

	describe('when passing a empty string', function() {

		it('expects to throw "No String found" error', function () {
			expect( function() {
				CountingMinutes();
			}).toThrow('No string found');
		});

	});






});


