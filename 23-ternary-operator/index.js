function doSomething(a) {
    var b;
    if (a > 0) {
      b = 1;
    } else if (a < 0) {
      b = 2;
    } else {
      b = 3;
    }
    return b;
  }
  
  function doSomethingTernary(a) {
      var b;
      a > 0 ? b = 1 
      : a < 0 ? b = 2
      : b = 3; 
    return b;
  }
  console.log(doSomethingTernary(0))
  console.log(doSomething(0))
  
  