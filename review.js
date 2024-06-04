document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('reviewForm');
    const reviewList = document.getElementById('reviewList');
    
    // Load reviews from localStorage
    loadReviews();

    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get the input values
        const name = document.getElementById('name').value;
        const review = document.getElementById('review').value;

        // Create new review item
        const reviewItem = createReviewItem(name, review);

        // Add the review item to the review list
        reviewList.appendChild(reviewItem);

        // Save the review
        saveReview(name, review);

        // Clear the form inputs
        reviewForm.reset();
    });

    function createReviewItem(name, review) {
        const reviewItem = document.createElement('li');
        reviewItem.classList.add('review-item');

        const reviewName = document.createElement('h4');
        reviewName.textContent = name;

        const reviewText = document.createElement('p');
        reviewText.textContent = review;

        reviewItem.appendChild(reviewName);
        reviewItem.appendChild(reviewText);

        return reviewItem;
    }

    function saveReview(name, review) {
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push({ name, review });
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }

    function loadReviews() {
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.forEach(review => {
            const reviewItem = createReviewItem(review.name, review.review);
            reviewList.appendChild(reviewItem);
        });
    }
});
