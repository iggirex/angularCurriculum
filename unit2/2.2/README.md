Asynchronous calls will mess with angular's under-the-hood $apply/$$watch/$digest cycle. So we can manually apply these commands, $digest will watch and update a variable in its local scope, while $apply will through through every possible scope down the $rootScope

Model mutation

For mutations to be properly observed, you should make them only within the scope.$apply(). Angular APIs do this implicitly, so no extra $apply call is needed when doing synchronous work in controllers, or asynchronous work with $http, $timeout or $interval services.
