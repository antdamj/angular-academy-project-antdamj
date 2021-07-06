const addReviewForm = document.querySelector("#add-review");
let reviews = []

const renderData = () => {
    const unorderedList = document.querySelector("#reviews-list");
    unorderedList.innerHTML = ""
    
    reviews.forEach((element) => {
        // create list item element with data
        const li = document.createElement("li");
        li.textContent = element.text + " " + element.score;

        // add list item to list
        unorderedList.appendChild(li);
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
        "score": formData.get("score")
    })

    renderData();
});

