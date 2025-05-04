const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("section a").forEach((link) => {
  if (link.href.includes("${acticePage}")) {
    link.classList.add("active");
  }
});
