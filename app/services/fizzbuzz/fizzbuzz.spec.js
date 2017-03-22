describe('fizzbuzz factory', function() {
  var fizzBuzz;


  beforeEach(angular.mock.module('api.fizzbuzz'));

  beforeEach(inject(function(_FizzBuzz_) {
      FizzBuzz = _FizzBuzz_;
  }));

  it('should exist', function() {
    expect(FizzBuzz).toBeDefined();
  });

  describe('.process()', function() {
    it('should exist', function() {
      expect(FizzBuzz.process).toBeDefined();
    });

    it('should return fizzbuzz for multiples of 3', function() {
     var result = FizzBuzz.process(3);
     expect(result).toEqual("Fizz");
    });

   it('should return fizzbuzz for multiples of 5', function() {
          var result = FizzBuzz.process(5);
          expect(result).toEqual("Buzz");
      });

      it('should return fizzbuzz for multiples of 3 and 5', function() {
          var result = FizzBuzz.process(15);
          expect(result).toEqual("FizzBuzz");
      });

      it('should return fizzbuzz for non multiples of 5 and 3', function() {
          var result = FizzBuzz.process(1);
          expect(result).toEqual("1");
      });

  });

  describe('.isMultipleOf3()', function() {
    it('should exist', function() {
      expect(FizzBuzz.isMultipleOf3).toBeDefined();
    });

    it('should return string if it exists', function() {
      expect(FizzBuzz.isMultipleOf3('3')).toBe(true)
    });


  });
});
