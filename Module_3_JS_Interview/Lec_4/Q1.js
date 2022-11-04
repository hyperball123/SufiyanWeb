function printArr(){
    let arr = [];
    // if u use var here output will be different
    // let comes in block scope
    
    for(let i = 0 ; i < 3 ; i++){
        function printI(){ 
            console.log("i",i)
        }
        // adding references to the array
        arr.push(printI);
    } 
    return arr;
}
let arrfn = printArr;
arrfn[0]();
arrfn[1]();
arrfn[2]();
