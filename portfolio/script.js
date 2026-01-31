// const form = document.getElementById("contactForm");
// const statusText = document.getElementById("formStatus");
// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll(".sidebar a");
// const revealSections = document.querySelectorAll("section");

// const revealOnScroll = () => {
//   revealSections.forEach(section => {
//     const sectionTop = section.getBoundingClientRect().top;
//     const triggerPoint = window.innerHeight - 100;

//     if (sectionTop < triggerPoint) {
//       section.classList.add("show");
//     }
//   });
// };

// window.addEventListener("scroll", revealOnScroll);
// revealOnScroll(); // run once on load


// window.addEventListener("scroll", () => {
//   let current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop - 150;
//     if (scrollY >= sectionTop) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLinks.forEach((link) => {
//     link.classList.remove("active");
//     if (link.dataset.section === current) {
//       link.classList.add("active");
//     }
//   });
// });


// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const name = document.getElementById("name").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const message = document.getElementById("message").value.trim();

//   if (name === "" || email === "" || message === "") {
//     statusText.style.color = "#f87171";
//     statusText.textContent = "Please fill in all fields.";
//     return;
//   }

//   statusText.style.color = "#38bdf8";
//   statusText.textContent = "Message sent successfully!";

//   form.reset();
// });
const form = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");
const sections = document.querySelectorAll("section.card");
const navLinks = document.querySelectorAll(".sidebar a");

/* REVEAL ON SCROLL */
const revealOnScroll = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 150;

    if (sectionTop < triggerPoint) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* SIDEBAR ACTIVE STATE */
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 2) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.dataset.section === current) {
      link.classList.add("active");
    }
  });
});

/* CONTACT FORM */
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    statusText.style.color = "#f87171";
    statusText.textContent = "Please fill in all fields.";
    return;
  }

  statusText.style.color = "#38bdf8";
  statusText.textContent = "Message sent successfully!";
  form.reset();
});
