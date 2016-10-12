What are Angular expressions? How do they compare to tags from templating engines you've used before?

--- Ng expressions are a way to put angular into regular html, they are place in inside interpolation tags and can access ng variables as well as doing Javascripty things like math. Other tags don't do math for you.

What happens when you write invalid code in an expression? What type of error do you get?

--- All the angular parts in the application break, and show themselves inside their interpolation tags, instead of resolving themselves and the result being presented in HTML.

What are Angular filters? Describe what a filter does and then name four built-in filters, including one that we haven't used yet.

--- Ng filters handle the output of ng expressions and format them to a desired way. Some built in filters are currency, number, date, json, lowercase, uppercase, limitTo.

What's the syntax for filters?

--- inside your expression, next to the value you want to filter you place a pipe and then the filter, if you need parameters for the filter you put a colon and then the parameter. {{expression | filter: filter-param}}

Can you use more than one filter?

--- yes, they can be stacked one after another separated by pipe symbols.

We'll soon see how to create custom filters. What is a use case for a custom filter?

--- you can reverse values, or process them further with custom filters
