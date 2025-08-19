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


function cupom(element) {
	var type = element.getAttribute('data-gtm-type');
	var clickType = element.getAttribute('data-gtm-clicktype');
	var name = element.getAttribute('data-gtm-name');
	var subName = element.getAttribute('data-gtm-subname');
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		event: "apply_cupom",
		ev_action: type + ':' + clickType + ':' + name,
		ev_label: subName
	});
}

function addtoCart(element) {
	var subName = element.getAttribute('data-gtm-subname');
	dataLayer.push({ ecommerce: null });
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		event: "add_to_cart",
		ecommerce: {
			currency: "BRL",
			items: [
				{
					item_id: "SKU_12345",
					item_name: subName,
					item_brand: "Furni",
					item_category: "Furniture",
					item_variant: "White",
					price: 49.00,
					quantity: 1
				}
			]
		}
	});
}

function removefromCart() {
	dataLayer.push({ ecommerce: null });
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		event: "remove_from_cart",
		ecommerce: {
			currency: "BRL",
			items: [
				{
					item_id: "SKU_12345",
					item_name: "Nordic Chair",
					item_brand: "Furni",
					item_category: "Furniture",
					item_variant: "White",
					price: 49.00,
					quantity: 1
				}
			]
		}
	});
}

function viewitemList() {
	dataLayer.push({ ecommerce: null });
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: 'view_item_list',
		ecommerce: {
			currency: "BRL",
			items: [
				{
					item_id: "SKU_12345",
					item_name: "Nordic Chair",
					item_brand: "Furni",
					item_category: "Furniture",
					item_variant: "White",
					price: 49.00,
					quantity: 1
				}
			]
		}
	})
}




function purchase() {
	const length = 12; // Define o comprimento do ID
	let transactionId = '';
	for (let i = 0; i < length; i++) {
		transactionId += Math.floor(Math.random() * 10); // Adiciona um número aleatório de 0 a 9
	}
	dataLayer.push({ ecommerce: null });
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: "purchase",
		ecommerce: {
			currency: "BRL",
			coupon: "EDUARDO20",
			payment_type: "Credit Card",
			transaction_id: transactionId,
			value: 350.00,
			items: [
				{
					item_id: "SKU_12345",
					item_name: "Nordic Chair",
					item_brand: "Furni",
					item_category: "Furniture",
					item_variant: "White",
					price: 49.00,
					discount: 2.22,
					quantity: 1
				},

				{
					item_id: "SKU_54321",
					item_name: "Kruzo Aero Chair",
					item_brand: "Furni",
					item_category: "Furniture",
					item_variant: "White",
					price: 49.00,
					discount: 2.22,
					quantity: 1
				}
			]
		}
	});
}

function begincheckout() {
	dataLayer.push({ ecommerce: null });
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		event: "begin_checkout",
		ecommerce: {
			currency: "BRL",
			items: [
				{
					item_id: "SKU_12345",
					item_name: "Nordic Chair",
					item_brand: "Furni",
					item_category: "Furniture",
					item_variant: "White",
					price: 49.00,
					quantity: 1
				},

				{
					item_id: "SKU_54321",
					item_name: "Kruzo Aero Chair",
					item_brand: "Furni",
					item_category: "Furniture",
					item_variant: "White",
					price: 49.00,
					quantity: 1
				}
			]
		}
	});
}

function viewCart() {
	dataLayer.push({ ecommerce: null });
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		event: "view_cart",
		ecommerce: {
			currency: "BRL",
			items: [
				{
					item_id: "SKU_12345",
					item_name: "Nordic Chair",
					item_brand: "Furni",
					item_category: "Furniture",
					item_variant: "White",
					price: 49.00,
					quantity: 1
				},

				{
					item_id: "SKU_54321",
					item_name: "Kruzo Aero Chair",
					item_brand: "Furni",
					item_category: "Furniture",
					item_variant: "White",
					price: 49.00,
					quantity: 1
				}
			]
		}
	});
}

function select_content(element) {
	var type = element.getAttribute('data-gtm-type');
	var clickType = element.getAttribute('data-gtm-clicktype');
	var name = element.getAttribute('data-gtm-name');
	var subName = element.getAttribute('data-gtm-subname');
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		event: "select_content",
		ev_action: type + ':' + clickType + ':' + name,
		ev_label: subName
	});
}

// Adiciona o evento de clique para cada botão, chamando select_content sem criar listeners duplicados
const buttons = document.querySelectorAll('.post-thumbnail, .persons, .btn-select-content');
buttons.forEach(button => {
	button.addEventListener('click', () => {
		select_content(button);
	});
});



function newsletter_generate(element) {
	var type = element.getAttribute('data-gtm-type');
	var clickType = element.getAttribute('data-gtm-clicktype');
	var name = element.getAttribute('data-gtm-name');
	var subName = element.getAttribute('data-gtm-subname');
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		event: "newsletter_generate",
		ev_action: type + ':' + clickType + ':' + name,
		ev_label: subName
	});
}

const buttonsPrimary = document.querySelectorAll('.btn-primary');
buttonsPrimary.forEach(button => {
	button.addEventListener('click', () => {
		newsletter_generate(button);
	});
});

function lead(element) {
	var type = element.getAttribute('data-gtm-type');
	var clickType = element.getAttribute('data-gtm-clicktype');
	var name = element.getAttribute('data-gtm-name');
	var subName = element.getAttribute('data-gtm-subname');
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		event: "generate_lead",
		ev_action: type + ':' + clickType + ':' + name,
		ev_label: subName,
		lead_id: "1"
	});
}

function eventAdobe(userInfo, itemClicado) {
  document.DataLayer = {
    pageInfo: {
      url: document.location.href,
      pageName: "teste",
    },
    userInfo: userInfo,
    rule: "customLink",
    custom: {
      events: [
        "cliquesGenericos"
      ],
      itemClicado: itemClicado,
      customLink: "CS|CliquesGenericos"
    }
  };
}


