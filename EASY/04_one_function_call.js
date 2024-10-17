var once = function(fn) {
    
    return function(...args){
        return args.forEach((arg) => {
            
        } )
    }
};


let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)
 // 6
 // returns undefined without calling fn
console.log(onceFn(1,2,3))
// console.log(onceFn(2,3,6))
