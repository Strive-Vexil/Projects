let noClickCount = 0;
const noButtonTexts = [
    "Are you sure? 😢",
    "Are you REALLY sure? 🥺",
    "Please click Yes 😭",
    "Don't break my heart 💔",
];

const imageUrls = [
    "runmilk.jpg",
    "https://source.unsplash.com/500x300/?cute,kitten",
    "https://source.unsplash.com/500x300/?cute,teddy",
    "please.gif",
];

document.getElementById("no-btn").addEventListener("click", function() {
    if (noClickCount < noButtonTexts.length) {
        this.textContent = noButtonTexts[noClickCount];
        document.getElementById("valentine-image").src = imageUrls[noClickCount]; // Change the image
        noClickCount++;
    } else {
        document.querySelector(".container").innerHTML = `
            <h1>YAYYYY! 🎉💕</h1>
            <p>I'm so happy! You're my Valentine! 🥰</p>
            <img src="torocheer.jpg" alt="Happy Valentine">
        `;
    }
});

document.getElementById("yes-btn").addEventListener("click", function() {
    document.querySelector(".container").innerHTML = `
        <h1>YAYYYY! 🎉💕</h1>
        <p>I'm so happy! You're my Valentine! 🥰</p>
        <img src="torocheer.jpg" alt="Happy Valentine">
    `;
});
