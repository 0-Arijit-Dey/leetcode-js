// 2703. Return Length of Arguments Passed

var argumentsLength = function (...args) {
    return args.length
};

console.log(argumentsLength({}, null, "3")); // 3
