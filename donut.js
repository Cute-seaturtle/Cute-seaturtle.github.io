var donuts = 600;

var deepFryerCount = 0;
var deepFryerCost = 100;
var deepFryerBaseCost = 100;
var deepFryerCollectionRate = 1;


var assistantCount = 0;
var assistantCost = 500;
var assistantCollectionRate = 5;


var ingredientsCount = 0;
var ingredientsCost = 1000;
var ingredientsCollectionRate = 10;


var flourCount = 0;
var flourCost = 1500;
var flourCollectionRate = 100;


var sprinklesCount = 0;
var sprinklesCost = 2000;
var sprinklesCollectionRate = 500;


var frostingCount = 0;
var frostingCost = 2500;
var frostingCollectionRate = 1000;


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


    function updateScrapCountDisplay(){
      document.getElementById("donutTotal").innerHTML = "Donuts: " + donuts.toLocaleString();
    }



function updateItemCost(baseCost, numberOwned){
  return Math.round(baseCost * Math.pow(costMultiplier, numberOwned));
}

function  updateStoreAvailable(){
  displayItemAvailable(deepFryerCost, "buydeepFryerButton");
  displayItemAvailable(upgradeClickCost, "upgradeClick");
}

function displayItemAvailable(itemCost, buttonId) {
  var button = document.getElementById(buttonId);


  console.log(buttonId);
  console.log(button);
  
  if (itemCost > donuts) {
    button.disabled = true;
    button.classlist.add("disabled");
  } else {
    button.disabled = false;
    button.classlist.remove("disabled");
  }
}

function upgradeClick() {
  if(donut>=upgradeClickCost){
    donuts = donuts - upgradeClickCost;
    clickvalue = 2;

    updateDisplay();
    document.getElementById('upgradeClick').style.display = 'none';
  }
}
