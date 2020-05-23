var rectangle = {
    width: 5,
    height: 10,
    getWidth: function(){
        console.log('Width: ' + this.width);
    },
    getHeight: function(){ 
        console.log('Height: ' + this.height);
    },
    getArea: function(){
        var area = this.width * this.height;  
        console.log('Area: '+ area);
    }
};
rectangle.getWidth();
rectangle.getHeight();
rectangle.getArea();