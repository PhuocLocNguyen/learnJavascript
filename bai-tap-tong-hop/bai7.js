function equal_pt(str){ 
    var i = countP = countT = 0;
    for(i;i<str.length;i++)
    {
        if(str.charAt(i)=='p')
         countP++;
         if(str.charAt(i)=='t')
         countT++;
    }
    return countP === countT;
}
console.log(equal_pt("tptaapt p "));