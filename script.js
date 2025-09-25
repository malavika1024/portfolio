const words = ["Frontend Developer", "Web Developer", "React Developer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const typingSpan = document.querySelector(".typing");

function type() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].slice(0, ++j);
      typingSpan.textContent = currentWord;
    }

    if (isDeleting && j >= 0) {
      currentWord = words[i].slice(0, --j);
      typingSpan.textContent = currentWord;
    }

    if (j === words[i].length) isDeleting = true;
    if (j === 0 && isDeleting) {
      isDeleting = false;
      i++;
      if (i === words.length) i = 0;
    }
  }
  setTimeout(type, isDeleting ? 70 : 150);
}

document.addEventListener("DOMContentLoaded", type);

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Select all links inside navLinks
  const links = navLinks.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show"); // hide nav after click
    });
  });
});
let activeSection = null;

function toggleSection(id) {
  const section = document.getElementById(id);

  // Hide all sections
  document.querySelectorAll('.info-box').forEach(box => {
    box.classList.add('hidden');
  });

  // If same section clicked again, close it
  if (activeSection === id) {
    activeSection = null;
  } else {
    section.classList.remove('hidden');
    activeSection = id;
  }
}
