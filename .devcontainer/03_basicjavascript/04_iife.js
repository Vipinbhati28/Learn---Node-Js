// Immediately Invoked Function Expression (IIFE)


(function Chai(){     // this is a named iife , because it has a name i.e chai
     console.log(`DB CONNECTED`);
})();


// ()() this is syntax is iife, for above first () is for function definition and second () for execution
// second reason for using this syntax to removing the pollution occuring due to declaration in global scope ++++++++++IMPORTANT for INTERVIEW


// we also can write it in arrow form as below
( () => {  // this is a unnamed iife , because it doesn't have any name
    console.log(`DB CONNECTED TWO`);
}) ();


// we also can pass variable in this form
( (name) => {
    console.log(`DB CONNECTED Two ${name}`);
}) (`vipin`);

// if we want to make to iife in a single file like above we must use semicolon in end of iife. 