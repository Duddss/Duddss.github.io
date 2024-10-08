(function () {
	'use strict';

	var tinyslider = function () {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();




	var sitePlusMinus = function () {

		var value,
			quantity = document.getElementsByClassName('quantity-container');

		function createBindings(quantityContainer) {
			var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
			var increase = quantityContainer.getElementsByClassName('increase')[0];
			var decrease = quantityContainer.getElementsByClassName('decrease')[0];
			increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
			decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
		}

		function init() {
			for (var i = 0; i < quantity.length; i++) {
				createBindings(quantity[i]);
			}
		};

		function increaseValue(event, quantityAmount) {
			value = parseInt(quantityAmount.value, 10);

			console.log(quantityAmount, quantityAmount.value);

			value = isNaN(value) ? 0 : value;
			value++;
			quantityAmount.value = value;
		}

		function decreaseValue(event, quantityAmount) {
			value = parseInt(quantityAmount.value, 10);

			value = isNaN(value) ? 0 : value;
			if (value > 0) value--;

			quantityAmount.value = value;
		}

		init();

	};
	sitePlusMinus();


})()

document.getElementById("btn-cart").addEventListener("click", viewCart());

var viewCart = function () {
	dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
	dataLayer.push({
		event: "view_cart",
		ecommerce: {
			currency: "USD",
			value: 7.77,
			items: [
				{
					item_id: "SKU_12345",
					item_name: "Product 1",
					affiliation: "Furni Fur",
					item_brand: "Furni",
					item_category: "Furniture",
					item_variant: "White",
					location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
					price: 49.00,
					quantity: 1
				},

				{
					item_id: "SKU_54321",
					item_name: "Product 2",
					affiliation: "Furni Fur",
					item_brand: "Furni",
					item_category: "Furniture",
					item_variant: "White",
					location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
					price: 49.00,
					quantity: 1
				}
			]
		}
	});
}
