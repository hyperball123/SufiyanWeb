every code in js is executed in bubble known as execution context
THERE ARE 3 PORTIONS OF EXECUTION CONTEXT
    --in node environment
        global object,this and code
    --in browser 
// global excution context also known as in browser as ANONYMOUS
        window ,this and code

any code that is written outside of function --> it is in global area
    for that global execution context is created
    -->also known as default execution context

*Execution context is made when a function is called -->  

*First phase of execution context:
    1->CREATION 
        global object
        this
        code
    2->Execution
        {left -> right}
        {top -> bottom}

//another Execution context is always created when a function is invoked

// when a function doesen't have a variable declared
    // --it will look outside the function defination

        