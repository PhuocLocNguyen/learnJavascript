var arrayHeightWidth = [
    {
      witdh: 4,
      height : 6
    },
     {
      witdh: 5,
      height : 7
    },
    {
      witdh: 1,
      height : 3
    },
    {
      witdh: 5,
      height : 10
    },
    {
      witdh: 10,
      height : 10
    }
  ];

var renderAcreage = function(arr) {
  return arr.witdh * arr.height;
}
var arrAcreage = [];
arrAcreage = arrayHeightWidth.map(renderAcreage);
console.log(arrAcreage);

  