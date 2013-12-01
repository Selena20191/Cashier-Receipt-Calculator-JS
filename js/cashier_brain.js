//Cashier Reciept Calculator JS
window.cashier = {}
	
var shopping_list = []; //creates a new shopping_list array

cashier.add_item = function(item){
	shopping_list.push(item); //pushes shopping_list into array
	cashier.show_receipt(); //displays receipt
}

cashier.new_item = function(){
	var item = {}; //create new object called item
	item.name = prompt("Name of item",""); //enter name of item
	item.price = prompt("Price of item (in pounds)",""); //enter price of item
	item.quantity = prompt("Quantity of item", ""); //enter the number of quantity for this item
	item.totalPrice = item.price * item.quantity; //gives total price of item
	cashier.add_item(item); //add new item to shopping list
}

cashier.show_receipt = function(){

	var receipt_text = ""; //creates receipt_text string
	var total = 0; 

	//loops the shopping_list array and adds to display
	for (i = 0; i < shopping_list.length; i++){ 

		var item = shopping_list[i];
		var totalPriceOfItem = item.totalPrice;

		receipt_text += "<tr>";
		receipt_text += "<td>" + item.name + "</td>";
		receipt_text += "<td>&pound;" + parseFloat(item.price).toFixed(2) + "</td>";
		receipt_text += "<td>" + item.quantity + "</td>";
		receipt_text += "<td>&pound;" + parseFloat(item.totalPrice).toFixed(2) + "</td>";
		receipt_text += "</tr>";

		//add item total to running total
		total = total + totalPriceOfItem;
	}

	var vat = total * 0.25;
	var net_total = total + vat;

	//adds to display
	$('.item_displays').html(receipt_text);
	$('.gross-total').text(total.toFixed(2));
	$('.vat-total').text(vat.toFixed(2));
	$('.net-total').text(net_total.toFixed(2));
}
