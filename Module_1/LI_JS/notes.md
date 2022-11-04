## JavaScript always works in an environment 
    * If Browser , Node & photoshop are an environment then JavaScript is the logic 
    * You cannot learn javaScript in isolation bcz it requires an environment

## ARRAYS imp Fucntions
    ## traverse ->
    let a=[1,2,3,4,5,6];
     for(let i = 0; i< a.length ; i++){
    //     console.log(i + " : " + a[i]);
    // } 
    
        console.log("before:", a);
    //for removing/adding at last
        a.pop();//removing last 
        a.push(20);//adding last
        console.log("-=---------------------------");
    //firstElement -> add/remove at first
        a.shift();//remove first;
        a.unshift(20);//add first
        console.log("after",a);

----------------------------------------------------------------------------
## OBJECTS
for(let key in cap){       
    console.log(key , " : " , cap[key])
    -- just using KEY will bring keys of obj cap
    -- and by using cap[key] it will bring details stored in keys
}