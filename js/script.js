function Pizza(size,crust,toppings){
	this.size = size;
	this.crust = crust;
	this.toppings = toppings;
};


let sizeSelector = document.getElementById("size-selector");
let sizePrice = 0;
let crustSelector = document.getElementById("crust-selector");
let crustPrice = 0;
let allToppings = document.forms[2];
let toppingsTotal = 0;
let orderContainer = document.getElementById("order");
let cartContainer = document.getElementById("cart");
let sizeName = "";
let crustName = "";
let toppingsName = [];


Pizza.prototype = {
	pricesForSizes : function(){
		// Price of each size selected
		this.size.selectedIndex == "0" ? sizePrice = 900:
		this.size.selectedIndex == "1" ? sizePrice = 700:
		this.size.selectedIndex == "2" ? sizePrice = 500:
		alert("Select a size please");

		this.size.selectedIndex == "0" ? sizeName = "Large Pizza":
		this.size.selectedIndex == "1" ? sizeName = "Medium Pizza":
		this.size.selectedIndex == "2" ? sizeName = "Small Pizza":
		alert("Select a size please");

	},
	pricesForCrust : function(){
		// Price of each crust selected
		this.crust.selectedIndex == "0" ? crustPrice = 250:
		this.crust.selectedIndex == "1" ? crustPrice = 200:
		this.crust.selectedIndex == "2" ? crustPrice = 100:
		this.crust.selectedIndex == "3" ? crustPrice = 300:
		alert("Select a size please");

		this.size.selectedIndex == "0" ? crustName = "Stuffed Crust":
		this.size.selectedIndex == "1" ? crustName = "Cheese filled":
		this.size.selectedIndex == "2" ? crustName = "Thin Crust":
		this.size.selectedIndex == "3" ? crustName = "Deep Crust":
		alert("Select a size please");
	},
	pricesForToppings : function(){
		// Total price of all the toppings selected
		for (i = 0; i < this.toppings.length; i++) {
   			if (this.toppings[i].checked) {
   				document.getElementById("cart-toppings").style.display = "block";
   				toppingsName.push(this.toppings[i].name);
    			let number = parseInt(this.toppings[i].value);
    			toppingsTotal = toppingsTotal + number;
    		}else if(!this.toppings[i].checked){
    			document.getElementById("cart-toppings").style.display = "none";
    		}
  		};
	}
}


const placeOrder = () => {
	const order = new Pizza(sizeSelector,crustSelector,allToppings);
	order.pricesForSizes();
	order.pricesForCrust();
	order.pricesForToppings();
	// Calculating the total for one order
	let oneOrderTotal = crustPrice + sizePrice + toppingsTotal;
	// Multiplying that with the number of orders choosen by user
	let numberOfOrders = document.getElementById("number-of-orders").value;
	let n = parseInt(numberOfOrders);
	if(numberOfOrders < 1){n = 1};
	let totalOfAllOrders = n * oneOrderTotal;
	orderContainer.style.display = "none";
	cartContainer.style.display = "block";
	// Cart outputs
	document.getElementById("choosen-size").innerHTML = sizeName;
	document.getElementById("choosen-crust").innerHTML = crustName;
	document.getElementById("choosen-toppings").innerHTML = toppingsName;
	document.getElementById("orders-choosen").innerHTML = n;
	document.getElementById("total-amount").innerHTML = totalOfAllOrders;
};

function finishOrder(){
	let deliveryOption = document.getElementById("delivery-option");
	if (deliveryOption.checked){
		
		let location = prompt("Enter your location");
		alert("Your Pizza will be delivered to " + location + " in a few minutes. Thank you");
	}
}