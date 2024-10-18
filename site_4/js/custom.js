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


function cupom() {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: 'applyCupom',
		cupom_id: 'EDUARDO20',
		discount: '20%'
	})
}

function addtoCart() {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		event: "add_to_cart",
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
				}
			]
		}
	});
}

function removefromCart() {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		event: "remove_from_cart",
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
				}
			]
		}
	});
}

function pageviewHome() {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: 'pageView',
		page_title: 'Home',
		page_location: 'https://duddss.github.io/site_4/index.html'
	})
}

function pageviewShop() {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: 'pageView',
		page_title: 'Shop',
		page_location: 'https://duddss.github.io/site_4/shop.html'
	})
}

function pageviewCart() {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: 'pageView',
		page_title: 'Cart',
		page_location: 'https://duddss.github.io/site_4/cart.html'
	})
}

function pageviewAbout() {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: 'pageView',
		page_title: 'About',
		page_location: 'https://duddss.github.io/site_4/about.html'
	})
}

function pageviewBlog() {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: 'pageView',
		page_title: 'Blog',
		page_location: 'https://duddss.github.io/site_4/blog.html'
	})
}

function pageviewCheckout() {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: 'pageView',
		page_title: 'Checkout',
		page_location: 'https://duddss.github.io/site_4/checkout.html'
	})
}

function pageviewContact() {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: 'pageView',
		page_title: 'Contact',
		page_location: 'https://duddss.github.io/site_4/contact.html'
	})
}

function pageviewServices() {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: 'pageView',
		page_title: 'Services',
		page_location: 'https://duddss.github.io/site_4/services.html'
	})
}

function pageviewPurchase() {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: 'pageView',
		page_title: 'Thankyou',
		page_location: 'https://duddss.github.io/site_4/thankyou.html'
	})
}

function viewitemList() {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: 'view_item_list',
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
				}
			]
		}
	})
}

function purchase() {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		event: "purchase",
		ecommerce: {
			currency: "USD",
			value: 7.77,
			cupom: "EDUARDO20",
			discount: "20%",
			payment_method: "Credit Card",
			transaction_id: "4719824",
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