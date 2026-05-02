document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");

      const menuIsOpen = navMenu.classList.contains("active");

      menuToggle.setAttribute(
        "aria-label",
        menuIsOpen ? "Close navigation menu" : "Open navigation menu"
      );

      menuToggle.textContent = menuIsOpen ? "×" : "☰";
    });

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
      });
    });
  }

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const questionSearch = document.getElementById("questionSearch");
  const questionList = document.getElementById("questionList");

  if (questionSearch && questionList) {
    const questions = questionList.querySelectorAll("a");

    questionSearch.addEventListener("input", () => {
      const searchTerm = questionSearch.value.trim().toLowerCase();

      questions.forEach((question) => {
        const questionText = question.textContent.trim().toLowerCase();

        if (questionText.includes(searchTerm)) {
          question.style.display = "block";
        } else {
          question.style.display = "none";
        }
      });
    });
  }

  const homepageSlideshow = document.getElementById("homepageSlideshow");

  if (homepageSlideshow) {
    const slides = homepageSlideshow.querySelectorAll(".slide");
    let currentSlide = 0;

    console.log("Slideshow running. Slide count:", slides.length);

    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === 0);
    });

    if (slides.length > 1) {
      setInterval(() => {
        slides[currentSlide].classList.remove("active");

        currentSlide = (currentSlide + 1) % slides.length;

        slides[currentSlide].classList.add("active");
      }, 4000);
    }
  } else {
    console.log("No slideshow found");
  }
});
