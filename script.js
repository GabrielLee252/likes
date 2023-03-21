// Get the like button element
var likeBtn = document.getElementById("likebtn");

// Get the likes count element
var likesCount = document.querySelector(".likes");

// Set the initial likes count to 3
var count = 3;

// Add a click event listener to the like button
likeBtn.addEventListener("click", function () {
    // Increase the count by 1
    count++;
    // Update the likes count text
    likesCount.textContent = count + " like(s)";
});
