let ratingSubmitted = new URLSearchParams(window.location.search).get("rating")
document.querySelector(".rating-submitted").innerText = ratingSubmitted