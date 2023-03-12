function fn(){
    var count = 0;
    return function fn1(){
        count++;
        return count;
    function fn2(){
        count++;
        return count;
        function fn3(){
            count++;
            return count;
        }
    }
    }
}
console.log("hello")
fn();