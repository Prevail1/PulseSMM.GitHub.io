document.addEventListener("DOMContentLoaded", () => {
  // год внизу
  document.getElementById("year").textContent = new Date().getFullYear();

  // кнопка "Связаться"
  document.getElementById("cta").addEventListener("click", () => {
    const email =
      document.getElementById("email").href || "mailto:you@example.com";
    window.location = email;
  });

  // соцсети
  const socials = {
    insta: "https://instagram.com/",
    tg: "https://t.me/",
    ln: "https://www.linkedin.com/",
  };

  for (const key in socials) {
    const el = document.getElementById(key);
    if (el && el.getAttribute("href") === "#") el.href = socials[key];
  }

  // плавный скролл до портфолио
  document.getElementById("portfolio-link").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
  });
});
