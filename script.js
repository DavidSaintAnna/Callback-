//callback example
function callBackExample(callback) {
    if (callback) {
        return callback();
    }

    return "hello";
}

console.log(
    callBackExample()
)