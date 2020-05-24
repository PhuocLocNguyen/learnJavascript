function findMaxDiff(arr) {
	/*
  	- Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
    - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
    - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
  */
if(arr.length<2)
    console.log(0);
else{
    var maxDiff,minDiff;
    var i = 0;
        for(i; i < arr.length -1 ; i++){
            maxDiff = Math.max(arr[i],arr[i+1]);
            minDiff = Math.min(arr[i],arr[i+1]);
            console.log(maxDiff + " > " + minDiff);
        }
        
    }
}

findMaxDiff([1]);
