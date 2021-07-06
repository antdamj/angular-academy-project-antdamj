const addReviewForm = document.querySelector("#add-review");
let reviews = []

const renderData = () => {
    const reviewsList = document.querySelector("#reviews-list");
    reviewsList.innerHTML = ""
    
    reviews.forEach((element) => {
        // create list item element with data
        const review = document.createElement("div");
        review.classList.add('review-box')
        review.classList.add('centered-container')
        review.classList.add('col-12')

        const reviewText = document.createElement("div");
        const reviewRating = document.createElement("div");

        reviewText.textContent = element.text;
        review.appendChild(reviewText)
        reviewRating.textContent = element.score + "/5";
        review.appendChild(reviewRating);

        // add list item to list
        reviewsList.appendChild(review);
    });

    // clear form fields
    addReviewForm.reset();
}

addReviewForm.addEventListener("submit", (event) => {
    // dont reload on sumbit
    event.preventDefault();

    // get form data
    const formData = new FormData(addReviewForm);

    // add review to array
    reviews.push({
        "text": formData.get("review"),
        "score": formData.get("rating")
    })

    renderData();
});

