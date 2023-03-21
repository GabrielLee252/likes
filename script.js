// Get the like buttons elements
var likeBtns = document.querySelectorAll("#likebtn1, #likebtn2, #likebtn3");

// Get the likes counts elements
var likesCounts = document.querySelectorAll(".likes");

// Set the initial likes count to 3 for each post
var counts = [9, 12, 9];

// Add a click event listener to each like button
likeBtns.forEach(function (likeBtn, i) {
    likeBtn.addEventListener("click", function () {
        // Increase the count by 1
        counts[i]++;
        // Update the likes count text
        likesCounts[i].textContent = counts[i] + " like(s)";
    });
});
