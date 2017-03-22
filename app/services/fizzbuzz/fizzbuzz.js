(function() {
    'use strict';

    angular.module('api.fizzbuzz', [])
        .factory('FizzBuzz', function() {
            var FizzBuzz = { };
            FizzBuzz.process= function(input) {

                if (FizzBuzz.isMultipleOf3(input) && FizzBuzz.isMultipleOf5(input)) {
                    return "FizzBuzz";
                }
                if (FizzBuzz.isMultipleOf3(input)) {
                    return "Fizz";
                }
                if (FizzBuzz.isMultipleOf5(input)) {
                    return "Buzz";
                }

                return input.toString();

            };

            FizzBuzz.isMultipleOf3 =  function( input) {
                return input % 3 == 0;
            }

            FizzBuzz.isMultipleOf5 = function( input) {
                return input % 5 == 0;
            }

            return FizzBuzz;
        });
})();
