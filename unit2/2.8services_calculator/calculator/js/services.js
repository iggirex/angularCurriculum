angular.module("myCalc")
    .factory("calcService", function(){
        return {
            add: function(a, b){
                return a + b;
            },
            subtract: function(a, b){
                return a - b;
            },
            multiply: function(a, b){
                return a * b;
            },
            divide: function(a, b){
                return a / b;
            },
            power: function(a, b){
                return Math.pow(a, b);
            }
        };
    });
