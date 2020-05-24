function getExtensionFilename(filename) {
    var strArr = filename.split(".");
    return strArr[strArr.length-1];
}
console.log(getExtensionFilename("a.txt"));