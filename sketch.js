var num;
var num1;
var num2;

var operator;

var PLUS = 1;
var MINUS = 2;
var MULTIPLY = 3;
var DIVIDE = 4;

var one;
var two;
var three;
var four;
var five;
var six;
var seven;
var eight;
var nine;

var operator1;
var operator2;
var operator3;
var operator4;

var reset;

var ANS;


function setup() {
createCanvas(600,500);

one = createSprite(200+250,300+50,40,30);
two = createSprite(250+250,300+50,40,30);
three = createSprite(300+250,300+50,40,30);
four = createSprite(200+250,350+50,40,30);
five = createSprite(250+250,350+50,40,30);
six = createSprite(300+250,350+50,40,30);
seven = createSprite(200+250,400+50,40,30);
eight = createSprite(250+250,400+50,40,30);
nine = createSprite(300+250,400+50,40,30);

operator1 = createSprite(450,30,30,30);
operator2 = createSprite(490,30,30,30);
operator3 = createSprite(530,30,30,30);
operator4 = createSprite(570,30,30,30);

reset = createSprite(200,400,40,30);

one.visible = false;
two.visible = false;
three.visible = false;
four.visible = false;
five.visible = false;
six.visible = false;
seven.visible = false;
eight.visible = false;
nine.visible = false;

operator1.shapeColor = "white";
operator2.shapeColor = "white";
operator3.shapeColor = "white";
operator4.shapeColor = "white";

reset.shapeColor = "white";

num1 = 0;
num2 = 0;
ANS = 0;
}

function draw() {
background("skyblue");

if(mousePressedOver(one) && num === 1)
{
num1 = 1;
}
if(mousePressedOver(two) && num === 1)
{
num1 = 2;
}
if(mousePressedOver(three) && num === 1)
{
num1 = 3;
}
if(mousePressedOver(four) && num === 1)
{
num1 = 4;
}
if(mousePressedOver(five) && num === 1)
{
num1 = 5;
}
if(mousePressedOver(six) && num === 1)
{
num1 = 6;
}
if(mousePressedOver(seven) && num === 1)
{
num1 = 7;
}
if(mousePressedOver(eight) && num === 1)
{
num1 = 8;
}
if(mousePressedOver(nine) && num === 1)
{
num1 = 9;
}

if(mousePressedOver(operator1))
{
operator = PLUS;
num = 2
}
if(mousePressedOver(operator2))
{
operator = MINUS;
num = 2
}
if(mousePressedOver(operator3))
{
operator = 3;
num = 2
}
if(mousePressedOver(operator4))
{
operator = DIVIDE;
num = 2
}
if(mousePressedOver(one) && num === 2)
{
num2 = 1;
}
if(mousePressedOver(two) && num === 2)
{
num2 = 2;
}
if(mousePressedOver(three) && num === 2)
{
num2 = 3;
}
if(mousePressedOver(four) && num === 2)
{
num2 = 4;
}
if(mousePressedOver(five) && num === 2)
{
num2 = 5;
}
if(mousePressedOver(six) && num === 2)
{
num2 = 6;
}
if(mousePressedOver(seven) && num === 2)
{
num2 = 7;
}
if(mousePressedOver(eight) && num === 2)
{
num2 = 8;
}
if(mousePressedOver(nine) && num === 2)
{
num2 = 9;
}

if(mousePressedOver(reset))
{
num = 1;  
num1 = 0;
num2 = 0;
operator = 0;
}










fill("black");
textSize(100);
text(ANS,200,200);


fill("black");
textSize(20);
text("+",445,65);
text("-",487,63);
text("*",528,67);
text("/",565,65);

if(operator === PLUS)
{
ANS = num1 + num2;
}
if(operator === MINUS)
{
ANS = num1 - num2;  
}
if(operator === 3)
{
ANS = num1*num2;  
}
if(operator === DIVIDE)
{
ANS = num1/num2;  
}

fill("white");
textSize(20);
text("1",200+250,300+50);
text("2",500,350);
text("3",550,350);
text("4",450,400);
text("5",500,400);
text("6",550,400);
text("7",450,450);
text("8",500,450);
text("9",550,450);





drawSprites();
}