function showDeliveryCost(deliveryCost) {
	document.getElementById('delivery-cost').innerText = `${deliveryCost}€`;
	// esta es otra forma de hacer lo mismo: document.getElementById('delivery-cost').innerText = deliveryCost + '€';
}
​
function showTotal(totalPrice) {
	document.getElementById('total-price').innerText = `${totalPrice}€`;
}
​
function showBadZipFormat() {
	console.error('El código zip introducido no es válido')
}
​
window.addEventListener('load', () => {
	const priceWithoutDeliveryCost = 5;
	const calculateDeliveryButton = document.getElementById('calculate-delivery');
​
	calculateDeliveryButton.addEventListener('click', () => {
		const zipCode = document.getElementById('zip-code').value;
		console.log(typeof zipCode);
		versionWithNumbers();
​
	})
});
​
function versionWithNumbers() {
	const priceWithoutDeliveryCost = 5;
	const zipCode = document.getElementById('zip-code').value;
	let deliveryCost;
	// si el número de caracteres de zipCode es distinto de 5
	if (zipCode.length !== 5 || zipCode.startsWith('0') || isNaN(zipCode)) {
		showBadZipFormat();
		return;
	}
​
	const firstZipCodeChar = Number(zipCode.charAt(0));
​
	console.log(typeof firstZipCodeChar);
​
	if (zipCode.startsWith('10')) {
		deliveryCost = 0;
	} else if (firstZipCodeChar > 0 && firstZipCodeChar <= 5) {
		deliveryCost = 2;
	} else if (firstZipCodeChar > 5 && firstZipCodeChar <= 8) {
		deliveryCost = 3;
	} else {
		deliveryCost = 5;
	}
​
	showDeliveryCost(deliveryCost);
	showTotal(priceWithoutDeliveryCost + deliveryCost);
}
​
function versionWithStringsAndStartsWith() {
	const priceWithoutDeliveryCost = 5;
	const zipCode = document.getElementById('zip-code').value;
	console.log(typeof zipCode);
	let deliveryCost;
​
​
	// si el número de caracteres de zipCode es distinto de 5
	if (zipCode.length !== 5 || zipCode.startsWith('0')) {
		showBadZipFormat();
		return;
	}
​
	if (zipCode.startsWith('10')) {
		deliveryCost = 0;
	} else if (zipCode.startsWith('1') || zipCode.startsWith('2') || zipCode.startsWith('3') || zipCode.startsWith('4') || zipCode.startsWith('5')) {
		deliveryCost = 2;
	} else if (zipCode.startsWith('6') || zipCode.startsWith('7') || zipCode.startsWith('8')) {
		deliveryCost = 3;
	} else {
		deliveryCost = 5;
	}
​
	showDeliveryCost(deliveryCost);
	showTotal(priceWithoutDeliveryCost + deliveryCost);
}