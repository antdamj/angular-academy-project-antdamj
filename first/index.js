const addReviewForm = document.querySelector('#add-review');

const init = () => {
	load();
	renderAllReviews();
};

// manage data

let reviews = [];

const load = () => {
	const storedReviews = JSON.parse(localStorage.getItem('reviews'));
	if (storedReviews) {
		console.log('Data loaded.');
		reviews = storedReviews;
	} else {
		console.log('No data stored.');
		reviews = [];
	}
};

const store = () => {
	localStorage.removeItem('reviews');
	localStorage.setItem('reviews', JSON.stringify(reviews));
};

// render functions

const renderReview = (review) => {
	const reviewsList = document.querySelector('#reviews-list');

	const reviewBox = document.createElement('div');
	reviewBox.classList.add('review-box');
	reviewBox.classList.add('centered-container');
	reviewBox.classList.add('col-12');

	const reviewData = document.createElement('div');
	reviewData.classList.add('col-11');

	const reviewText = document.createElement('div');
	const reviewRating = document.createElement('div');

	reviewText.textContent = `${review.text}`;
	reviewData.appendChild(reviewText);
	reviewRating.textContent = `${review.score}/5`;
	reviewData.appendChild(reviewRating);

	const reviewDelete = document.createElement('div');
	reviewDelete.classList.add('col-1');
	const reviewDeleteButton = document.createElement('button');
	reviewDeleteButton.classList.add('delete-button');
	reviewDeleteButton.textContent = '-';
	reviewDeleteButton.onclick = function () {
		reviewsList.removeChild(reviewBox);
		let index = reviews.indexOf(review);
		reviews.splice(index, 1);
		renderRating();
		console.log(reviews);
	};
	reviewDelete.appendChild(reviewDeleteButton);

	reviewBox.appendChild(reviewData);
	reviewBox.appendChild(reviewDelete);

	reviewsList.appendChild(reviewBox);

	addReviewForm.reset();
	renderRating();
};

const renderAllReviews = () => {
	reviews.forEach((review) => {
		renderReview(review);
	});
};

const renderRating = () => {
	avg = 0.0;
	reviews.forEach((review) => {
		avg += parseFloat(review.score);
	});
	avg /= reviews.length;
	avg = avg.toFixed(2);

	const averageRating = document.querySelector('#avg-rating');
	if (reviews.length) averageRating.innerHTML = `Average rating: ${avg}/5`;
	else averageRating.innerHTML = '';
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

	const text = formData.get('review');
	const score = formData.get('rating');

	const review = {
		text,
		score,
	};

	if (valid) {
		reviews.push(review);
		renderRating();
		renderReview(review);
	}

	store();
});

init();
