var categories = [
    { id: 1, name: 'Đồ điện tử'},
    { id: 2, name: 'Đồ gia dụng'},
    { id: 3, name: 'Nội thất'}
  ];

  var listProducts = [
    {id: 1, categoryId: 1, name: 'Tivi'},
    {id: 2, categoryId: 1, name: 'Tủ lạnh'},
    {id: 3, categoryId: 3, name: 'Ghế sofa'},
    {id: 4, categoryId: 1, name: 'Máy giặt'},
    {id: 5, categoryId: 2, name: 'Chén bát'},
    {id: 6, categoryId: 2, name: 'Nồi cơm điện'},
    {id: 7, categoryId: 3, name: 'Cửa kính'},
    {id: 8, categoryId: 1, name: 'Điều hoà'},
    {id: 9, categoryId: 3, name: 'Bàn tròn'},
    {id: 10, categoryId: 2, name: 'Lò vi sóng'},
   ];
   
   function filterProductsByCategoryId(products, categoryId) {
    return products.filter(x => x.categoryId === categoryId);
  }

  function filterCategoryIdByName(cate, name) {
    var cateId = cate.find(x => x.name === name);
   // console.log(cateId.id);
    return cateId.id;
  }

  function filterProductsByCategoryName(products, name) {
      var categoryId = filterCategoryIdByName(categories, name);
    return products.filter(x => x.categoryId === categoryId);
  }
  //console.log(filterProductsByCategoryId(listProducts,2));
  //console.log(filterCategoryIdByName(categories,'Đồ gia dụng'));
  console.log(filterProductsByCategoryName(listProducts,'Nội thất'));
  