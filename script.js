
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
		draw_data();
		read_image();
}

var read_image = function() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	const image = new Image;
	image.src = "testbild.jpg";
	image.onload = () => {
	  ctx.drawImage(image, 0, 0);
	  imageData = ctx.getImageData(0, 0, 300, 311);
	  black_white(imageData);
	  console.log(imageData);
	}
}

var black_white = function(imageData) {
	//var imgData = ctx.createImageData(500, 500);
	var i;
	for (i = 0; i < imgData.data.length; i += 4) {
	  var sum = imgData.data[i + 0]+imgData.data[i + 1]+imgData.data[i + 2];
	  var avg = sum/3;
	  imgData.data[i + 0] = avg;
	  imgData.data[i + 1] = avg;
	  imgData.data[i + 2] = avg;
	  imgData.data[i + 3] = 255;
	}
	ctx.putImageData(imgData, 10, 10);
}
