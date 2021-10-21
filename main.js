//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


//Give specific height and width to the car image
car_width=70;
car_height=150;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
car_x=25;
car_y=340;

function add() {
	//upload car, and background images on the canvas.
	bg_img= new Image();
    bg_img.onload=uploadBackground;
    bg_img.src=background_image;

    greencar_img= new Image();
    greencar_img.onload=uploadgreencar;
    greencar_img.src=greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(bg_img,0,0, canvas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_img, car_x, car_y, car_width, car_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function left()
{
	//Define function to move the car upward
	if(car_x>=0){
		car_x=car_x-10;
		uploadBackground();
		uploadgreencar();
}
}

function down()
{
	//Define function to move the car downward 
	if(car_y<=(canvas.height-car_height))
		car_y=car_y+10;
		uploadBackground();
		uploadgreencar();
}

function up()
{
	//Define function to move the car left side
	if(car_y>=0){
		car_y=car_y-10;
		uploadBackground();
		uploadgreencar();
}
}
function right()
{
	//Define function to move the car right side
	if(car_x<=(canvas.width-car_width))
		car_x=car_x+10;
		uploadBackground();
		uploadgreencar();
}
