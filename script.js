// =====================================================
// PERSONALISE YOUR BIRTHDAY WEBSITE HERE
// Change the words inside the quotation marks.
// =====================================================
const birthdayPerson = {
  name: "Sunshine",
  relation: "Someone special",
  from: "Someone who cares",
  message: "I hope your day is filled with little moments that make you smile, people who make you feel loved, and memories you will want to keep forever. Thank you for being exactly who you are. You deserve all the happiness this world has to offer."
};

// The website uses the details above in different places.
document.title = `Happy Birthday, ${birthdayPerson.name}!`;
document.getElementById("heroName").textContent = birthdayPerson.name;
document.getElementById("letterGreeting").textContent = `Dear ${birthdayPerson.name},`;
document.getElementById("letterMessage").textContent = birthdayPerson.message;
document.getElementById("letterFrom").textContent = `${birthdayPerson.from} ♡`;
document.getElementById("finalFrom").textContent = `Made with love by ${birthdayPerson.from}`;

// Scroll to the letter when the welcome button is clicked.
document.getElementById("startButton").addEventListener("click", function () {
  document.getElementById("letter").scrollIntoView({ behavior: "smooth" });
});

// Birthday cake candles.
const cake = document.querySelector(".cake");
const candleButton = document.getElementById("candleButton");
const wishMessage = document.getElementById("wishMessage");
let candlesAreLit = false;

candleButton.addEventListener("click", function () {
  candlesAreLit = !candlesAreLit;
  cake.classList.toggle("lit", candlesAreLit);

  if (candlesAreLit) {
    candleButton.textContent = "Blow out the candles ✨";
    wishMessage.textContent = "Make a wish... may it come true! ♡";
  } else {
    candleButton.textContent = "Light the candles ✨";
    wishMessage.textContent = "Your wish is on its way! 💗";
  }
});

// Click a gift to reveal a surprise message.
const gifts = document.querySelectorAll(".gift");
const surpriseMessage = document.getElementById("surpriseMessage");

gifts.forEach(function (gift) {
  gift.addEventListener("click", function () {
    surpriseMessage.textContent = gift.dataset.message;
  });
});

// Background music. Browsers need a click before music can start.
const music = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");
let musicIsPlaying = false;

musicButton.addEventListener("click", function () {
  if (!musicIsPlaying) {
    music.play().then(function () {
      musicIsPlaying = true;
      musicButton.textContent = "♫ Pause music";
    }).catch(function () {
      musicButton.textContent = "Add birthday-song.mp3 first";
    });
  } else {
    music.pause();
    musicIsPlaying = false;
    musicButton.textContent = "♫ Play music";
  }
});

// If a photo file is missing, show its pretty placeholder instead.
document.querySelectorAll(".photo-frame img").forEach(function (photo) {
  photo.addEventListener("error", function () {
    photo.style.display = "none";
  });
});
