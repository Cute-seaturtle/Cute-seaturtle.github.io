var donuts = 90;

var deepFryerCount = 0;
var deepFryerCost = 100;
var deepFryerBaseCost = 100;
var deepFryerCollectionRate = 1;


var assistantCount = 0;
var assistantCost = 500;
var assistantCollectionRate = 5;
var assistantBaseCost = 500;


var ingredientsCount = 0;
var ingredientsCost = 1000;
var ingredientsCollectionRate = 10;
var ingredientsBaseCost = 1000;


var flourCount = 0;
var flourCost = 1500;
var flourCollectionRate = 100;
var flourBaseCost = 1500;


var sprinklesCount = 0;
var sprinklesCost = 2000;
var sprinklesCollectionRate = 500;
var sprinklesBaseCost = 2000;


var frostingCount = 0;
var frostingCost = 2500;
var frostingCollectionRate = 1000;
var frostingBaseCost = 2500;


var itemCost = 1;

var clickvalue = 1;
var upgradeClickCost = 400;


var costMultiplier = 1.15;

window.setInterval(mainloop, 1000);

function mainloop() {
  donuts = donuts + (deepFryerCollectionRate * deepFryerCount);
  updateScrapCountDisplay()
}

function bake() {
  donuts = donuts + clickvalue;
  updateScrapCountDisplay()
  updateStoreAvailable()
}

function updateDisplay(){
  updateScrapCountDisplay();
  updateStoreAvailable();
}

function buydeepFryer() {
  if(donuts >= deepFryerCost) {
    deepFryerCount++;
    donuts = donuts - deepFryerCost;

    deepFryerCost = updateItemCost(deepFryerBaseCost, deepFryerCount)
    console.log(deepFryerCost);

    document.getElementById("deepFryerCost").innerHTML = deepFryerCost;
    document.getElementById("deepFryerCount").innerHTML = deepFryerCount;
    document.getElementById("donutTotal").innerHTML = "Donuts: " + donuts;
  }
}


function buyAssistant() {
  if(donuts >= assistantCost) {
    assistantCount++;
    donuts = donuts - assistantCost;

    assistantCost = updateItemCost(assistantBaseCost, assistantCount)
    console.log(assistantCost);
    console.log('inside buyAssistant');

    document.getElementById("assistantCost").innerHTML = assistantCost;
    document.getElementById("assistantCount").innerHTML = assistantCount;
    document.getElementById("donutTotal").innerHTML = "Donuts: " + donuts;
  }
}

function buyIngredients() {
  if(donuts >= ingredientsCost) {
    ingredientsCount++;
    donuts = donuts - ingredientsCost;

    ingredientsCost = updateItemCost(ingredientsBaseCost, ingredientsCount)
    console.log(ingredientsCost);
    console.log('inside buyIngredients');

    document.getElementById("ingredientsCost").innerHTML = ingredientsCost;
    document.getElementById("ingredientsCount").innerHTML = ingredientsCount;
    document.getElementById("donutTotal").innerHTML = "Donuts: " + donuts;
  }
}

function buyFlour() {
  if(donuts >= flourCost) {
    flourCount++;
    donuts = donuts - flourCost;

    flourCost = updateItemCost(flourBaseCost, flourCount)
    console.log(flourCost);
    console.log('inside buyFlour');

    document.getElementById("flourCost").innerHTML = flourCost;
    document.getElementById("flourCount").innerHTML = flourCount;
    document.getElementById("donutTotal").innerHTML = "Donuts: " + donuts;
  }
}

function buySprinkles() {
  if(donuts >= sprinklesCost) {
    sprinklesCount++;
    donuts = donuts - sprinklesCost;

    sprinklesCost = updateItemCost(sprinklesBaseCost, sprinklesCount)
    console.log(sprinklesCost);
    console.log('inside buySprinkles');

    document.getElementById("sprinklesCost").innerHTML = sprinklesCost;
    document.getElementById("sprinklesCount").innerHTML = sprinklesCount;
    document.getElementById("donutTotal").innerHTML = "Donuts: " + donuts;
  }
}

function buyfrosting() {
  if(donuts >= frostingCost) {
    frostingCount++;
    donuts = donuts - frostingCost;

    frostingCost = updateItemCost(frostingBaseCost, frostingCount)
    console.log(frostingCost);
    console.log('inside buyfrosting');

    document.getElementById("frostingCost").innerHTML = frostingCost;
    document.getElementById("frostingCount").innerHTML = frostingCount;
    document.getElementById("donutTotal").innerHTML = "Donuts: " + donuts;
  }
}


    function updateScrapCountDisplay(){
      document.getElementById("donutTotal").innerHTML = "Donuts: " + donuts.toLocaleString();
    }



function updateItemCost(baseCost, numberOwned){
  return Math.round(baseCost * Math.pow(costMultiplier, numberOwned));
}

function  updateStoreAvailable(){
  displayItemAvailable(upgradeClickCost, "upgradeClick");
  displayItemAvailable(assistantCost, "buyAssistantButton");
  displayItemAvailable(deepFryerCost, "buydeepFryerButton");
  displayItemAvailable(ingredientsCost, "buyIngredientsButton");
  displayItemAvailable(flourCost, "buyFlourButton");
  displayItemAvailable(sprinklesCost, "buySprinklesButton");
  displayItemAvailable(frostingCost, "buyFrostingButton");
}

function displayItemAvailable(itemCost, buttonId) {
  var button = document.getElementById(buttonId);


  console.log(buttonId);
  console.log(button);

  if (itemCost > donuts) {
    button.disabled = true;
    button.classList.add("disabled");
  } else {
    button.disabled = false;
    button.classList.remove("disabled");
  }
}

function upgradeClick() {
  if(donuts>=upgradeClickCost){
    donuts = donuts - upgradeClickCost;
    clickvalue = 2;

    updateDisplay();
    document.getElementById('upgradeClick').style.display = 'none';
  }
}
