angular.module("myApp")
.factory("firstService", function(){
  //outside return block, eveything is private
  return {
    //inside return block, everything can be accessed externally
    sayHi: function(){
      return "Hello!"
    },
    sayGoodbye: function(){
      return "Goodbye!"
    },
    getAllUsers: function(){
      //ajax call here
    },
    addUser: function(){
      //another ajax all
    }
  }
})
