const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

window.onscroll = function (e) {
  topMenu = document.querySelector(".navbar");
  scrollTopAmount = document.body.scrollTop;

  if (scrollTopAmount != 0) {
    topMenu.style.display = "none";
  } else topMenu.style.display = "flex";
};

function submitForm(form) {
  var fname = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Check if any of the fields are empty
  if (fname === "" || email === "" || message === "") {
    alert("Please fill in all the fields.");
    return; // Stop form submission
  }

  alert("Name: " + fname + "\nEmail: " + email + "\nMessage: " + message);
  form.reset();
}
