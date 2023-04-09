var heading;
var executeButton;
var outputParagraph;
var inputElement;

var shirts = ["cropped tee", "sweatshirt", "cardigan", "tank top", "blouse"];
var pants = ["jeans", "pleated skirts", "shorts", "sweatpants", "leggings"];
var shoes = ["sneakers", "loafers", "sandals", "boots", "heels"];

// addEventListener requires two parameters: the event that is occurring and a callback that includes the event
// heading.addEventListener("mouseover", demonstrationFunction);
// document.addEventListener('mousemove', mouseMovedFunc);

document.addEventListener("DOMContentLoaded", function(){

  heading = document.getElementById("title");
  executeButton = document.getElementById("executeButton");
  outputParagraph = document.getElementById("outputText");
  inputElement = document.getElementById("myInput");

  executeButton.addEventListener("click", function(){
    generateOutfit();
  });


});


var croppedTeeImages = ["https://cdn.shopify.com/s/files/1/0455/9827/7796/products/MD034EH-482S0150000_0_750x.jpg?v=1680643356", "https://cdn.shopify.com/s/files/1/0455/9827/7796/products/MD034-166TS071V842AD_0_750x.jpg?v=1680203726", "https://cdn.shopify.com/s/files/1/0455/9827/7796/products/MW873-686TS254V487BCAJ_750x.jpg?v=1678976712"];
function generateOutfit() {
  var randomShirtIndex = Math.floor(Math.random() * shirts.length);
  var randomCroppedTeeIndex = Math.floor(Math.random() * croppedTeeImages.length);
  var randomPantsIndex = Math.floor(Math.random() * pants.length);
  var randomShoesIndex = Math.floor(Math.random() * shoes.length);



  var name = inputElement.value; // Get the value of the input

  var outfit = "Hi " + name + ", you should wear a " + shirts[randomShirtIndex] + ", " + pants[randomPantsIndex] + ", and " + shoes[randomShoesIndex] + ".";
  outputParagraph.innerText = outfit;

  restyleOutput();
}





function mouseMovedFunc(eventDetails) {

  var mouseX = eventDetails.screenX;
  var mouseY = eventDetails.screenY;

  console.log("Cursor is at: " + mouseX + "," + mouseY + ".");

  executeButton.style.transform = "translate(" + mouseX + "px," + mouseY + "px)";

}

function restyleOutput() {
  // Generate a random pastel color for the text
  var randomColor = 'rgb(' + Math.floor(Math.random() * 101 + 155) + ', ' + Math.floor(Math.random() * 101 + 155) + ', ' + Math.floor(Math.random() * 101 + 155) + ')';

  // Apply the random color to the output paragraph
  outputParagraph.style.color = randomColor;
}

