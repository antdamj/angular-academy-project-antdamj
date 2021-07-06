const addReviewForm = document.querySelector("#add-review");
let reviews = []

// onload ?
for (let i = 0; i < localStorage.length; i++) {
    reviews.push({
        "id": i,
        "data": {
            "text": localStorage.key(i),
            "score": localStorage.getItem(localStorage.key(i))
        }
    });
}

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

        const reviewData = document.createElement("div");
        reviewData.classList.add('col-11');
        reviewText.textContent = element.data.text;
        reviewData.appendChild(reviewText);
        reviewRating.textContent = element.data.score + "/5";
        reviewData.appendChild(reviewRating);

        const deleteReviewButton = document.createElement("button");
        deleteReviewButton.classList.add('col-1')
        deleteReviewButton.textContent = "-";

        review.appendChild(reviewData)
        review.appendChild(deleteReviewButton)

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

    localStorage.setItem(formData.get("review"), formData.get("rating"))

    // console.log(localStorage)

    renderData();
});


renderData()