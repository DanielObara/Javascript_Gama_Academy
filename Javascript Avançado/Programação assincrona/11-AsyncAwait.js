async function myFetch1() {
	let response = await fetch('coffee.jpg');

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	let myBlob = await response.blob();

	let objectURL = URL.createObjectURL(myBlob);
	let image = document.createElement('img');
	image.src = objectURL;
	document.body.appendChild(image);
}

myFetch1()
	.catch(e => {
		console.log('There has been a problem with your fetch operation: ' + e.message);
	});


async function myFetch2() {
	let response = await fetch('coffee.jpg');
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return await response.blob();

}

myFetch2().then((blob) => {
	let objectURL = URL.createObjectURL(blob);
	let image = document.createElement('img');
	image.src = objectURL;
	document.body.appendChild(image);
}).catch(e => console.log(e));