const addReviewForm = document.querySelector('#add-review');

const renderData = () => {
	const reviewsList = document.querySelector('#reviews-list');
	reviewsList.innerHTML = '';

	const avgRating = document.querySelector('#avg-rating');
	let avg = 0.0;

	Object.keys(localStorage).forEach(function (key) {
		let element;

		try {
			element = JSON.parse(localStorage.getItem(key));
		} catch (e) {
			console.log('error');
		}

		if (element != null) {
			avg += parseFloat(element.score);

			const reviewBox = document.createElement('div');
			reviewBox.classList.add('review-box');
			reviewBox.classList.add('centered-container');
			reviewBox.classList.add('col-12');

			const reviewData = document.createElement('div');
			reviewData.classList.add('col-11');

			const reviewText = document.createElement('div');
			const reviewRating = document.createElement('div');

			reviewText.textContent = element.text;
			reviewData.appendChild(reviewText);
			reviewRating.textContent = element.score + '/5';
			reviewData.appendChild(reviewRating);

			const reviewDelete = document.createElement('div');
			reviewDelete.classList.add('col-1');
			const reviewDeleteButton = document.createElement('button');
			reviewDeleteButton.textContent = '-';
			reviewDeleteButton.onclick = function () {
				localStorage.removeItem(key);
				renderData();
			};
			reviewDelete.appendChild(reviewDeleteButton);

			reviewBox.appendChild(reviewData);
			reviewBox.appendChild(reviewDelete);

			// add list item to list
			reviewsList.appendChild(reviewBox);
		}
	});

	// clear form fields
	addReviewForm.reset();

	// get avg rating without insignificant zeros
	avg = +(avg / localStorage.length).toFixed(2);
	if (localStorage.length) avgRating.innerHTML = 'Average rating: ' + avg.toString() + '/5';
};

addReviewForm.addEventListener('submit', (event) => {
	// dont reload on sumbit
	event.preventDefault();

	// get form data
	const formData = new FormData(addReviewForm);

	// check form data
	let valid = true;
	if (!formData.get('review') || !formData.get('rating')) {
		alert('Fields cannot be empty! Please try again.');
		valid = false;
	}
	if (formData.get('rating') < '1' || formData.get('rating') > '5') {
		alert('Rating must be a numeric value between 1 and 5! Please try again.');
		valid = false;
	}

	// add review to localStorage
	if (valid) {
		localStorage.setItem(
			localStorage.length,
			JSON.stringify({
				text: formData.get('review'),
				score: formData.get('rating'),
			})
		);
	}

	renderData();
});

renderData();
