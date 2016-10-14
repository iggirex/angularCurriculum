What is $rootScope?
--- The most global scope in Angular apps; the parent of all $scopes.

Explain how $scope is passed from a parent to child controller
--- When a controller is nested within another controller, the one inside is child the one outside is parent. The child has access to the parents's $scopes.

List five built in directives that create their own scope
--- ng-repeat, ng-if, ng-controller, ng-view, ng-switch, ng-include

"Scope becomes tricky when you try to 2 way data bind to a primitive defined on the parent scope from inside the child scope" - what does this mean?
--- Primitives are not the best things to pass with $scope because in order to have 2way data bind between parent/child controllers, the child cannot have it's own property/values, instead it should have a reference to those property/values of the parent, so that when the child is changed, it has that reference to go and change the parent, and thus create 2 way data binding. Passing a primitive value to a child makes the child create it's own proterty/value and drop the reference to the parent's.
