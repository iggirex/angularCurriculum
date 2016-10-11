What does ng-model do?

--- ng-model is Angular's way of binding data, it is placed in an HTML tag in order to obtain a value and possibly using that value elsewhere.

What is "dirty checking"?

---Dirty checking is another name for $digest(), which is Angular's process for two way data binding. When data is attached to the $scope variable, Angular puts a $watch on it, which watches for changes to $scope, and when then are changes it runs $apply() which makes will change the DOM contents to reflect the new value(s) $scope.

Find a way to set the initial value of "name" as "BoJack" (without writing a controller).

--- <p ng-init="name= 'Bo Jackman'">My name is: {{ name }}</p>

What are those {{ }} expressions? Are they Handlebars?

--- The double curlies, called interpolation tags, alert Angular that whatever is inside them is an Angular expression. They are not handlebars, any other double curlies like handlebars will clash with Angular's interpolation tags.

Explain what two-way data binding is.

--- Two way data binding is the magical power of a user changing a variable or value in the in the front or back of the program, and the program looking for that changed value elsewhere in the program, and automatically changing it for you. For Angular this automatic changing happens in the DOM.
