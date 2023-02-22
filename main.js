// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
function handleClick(e) {
  mimicServerCall()
    .then(() => {
      if (e.target.classList.contains("activated-heart")) {
        e.target.classList.remove("activated-heart");
        e.target.textContent = EMPTY_HEART;
      } else {
        e.target.classList.add("activated-heart");
        e.target.textContent = FULL_HEART;
      }
    })
    .catch((errorMessage) => {
      const errorPopup = document.querySelector("#modal");
      errorPopup.children[1].textContent = errorMessage;
      errorPopup.classList.remove("hidden");
      setTimeout(() => {
        errorPopup.classList.add("hidden");
      }, 3000);
    });
}

const likeBtns = document.querySelectorAll(".like-glyph");
likeBtns.forEach((likeBtn) => {
  likeBtn.addEventListener("click", handleClick);
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
