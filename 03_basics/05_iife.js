// immediate invoked function expression

// ()().    remember like this its function declaration


// iife avoids polluting the golbal namespace as it prevents
// func and var from being added in global scope.
// where they could be accidentally overwrite.

(function hello(){
    console.log("hello")
})();

( (name) => {
    console.log(`hello arrow func iife ${name}`)
} )("jeet")
