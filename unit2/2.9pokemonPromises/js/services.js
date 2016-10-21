angular.module("pokePromise")
  .factory("pokeFactory", function($http){
    var pokemonInfoPath = "http://pokeapi.co/api/v2/pokemon/1/"
    console.log("this is inside services")
    return {
      catchEm: function(pokemonId){
        var fullUrl = pokemonInfoPath
        return $http.get(fullUrl).then(function(baseData){
          console.log(baseData)
          console.log(baseData.data.forms[0].name)
          return baseData.data.forms[0].name
          // return pokeData = baseData.abilities[0].resource_uri
          // $http.get(baseUrl + uri).then(function(abilityData) {
          //   return pokeData.abilities[0] = abilityData.data
          //
          //   var uri = pokeData.moves[0].resource_uri
          //   $http.get(baseUrl + uri).then(function(moveData){
          //     return pokeData.moves[0] = moveData.data
          //   })
          // })
        })
      }
    }
  })
