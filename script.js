
var imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);



function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            var c = document.getElementById("myCanvas");
	        var ctx = c.getContext("2d");
            c.width = img.width;
            c.height = img.height;
            ctx.drawImage(img,0,0);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
}


var draw_data = function() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	// read_image();
	var imgData = ctx.createImageData(500, 500);
	var i;
	for (i = 0; i < imgData.data.length; i += 4) {
	  imgData.data[i + 0] = 0;
	  imgData.data[i + 1] = 0;
	  imgData.data[i + 2] = 0;
	  imgData.data[i + 3] = 255;
	}
	ctx.putImageData(imgData, 10, 10);
}

// var drawRect = function() {
	// var c = document.getElementById("myCanvas");
	// var ctx = c.getContext("2d");
	// ctx.beginPath();
	// ctx.rect(20, 20, 500, 500);
	// ctx.stroke();
// }


var buttonclick = function() {
		console.log("button clicked");
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        var imageData = ctx.getImageData(0, 0, c.width, c.height);
        var imgData = black_white(imageData);
        ctx.putImageData(imgData, 0, 0);
	    console.log("imgData"+imgData,imageData);
}

var black_white = function(imgData) {
	var i;
	for (i = 0; i < imgData.data.length; i += 4) {
	  var sum = imgData.data[i + 0]+imgData.data[i + 1]+imgData.data[i + 2];
	  var avg = sum/3;
	  imgData.data[i + 0] = avg;
	  imgData.data[i + 1] = avg;
	  imgData.data[i + 2] = avg;
	  imgData.data[i + 3] = 255;
	}
    console.log("black_white finished");
    return imgData;
}
