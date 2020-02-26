var getParentPath = function(val) {
    let newStr = val;
    if (val.indexOf('/') === 0) {
        newStr = newStr.slice(1);
    }
    let slashPos = newStr.indexOf('/');
    if (slashPos >= 0) {
        newStr = newStr.substring(0,slashPos);
    }
    return newStr;
} 

var stripSlashes = function (val) {
    let newStr = val;
    if (val.indexOf('/') === 0) {
        newStr = newStr.slice(1);
    }
    return newStr.replace(/\//g, '-');
}

export default {
    getParentPath,
    stripSlashes
};