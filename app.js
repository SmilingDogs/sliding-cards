const slides = document.querySelectorAll(".slide");

slides.forEach((s) =>
  s.addEventListener("click", () => {
    slides.forEach((s) => s.classList.remove("active"));
    s.classList.add("active");
  })
);
