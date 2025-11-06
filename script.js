document.addEventListener("DOMContentLoaded", () => {
  // Плавное появление карточки
  const card = document.querySelector(".card");
  setTimeout(() => {
    card.classList.add("visible");
  }, 100);

  // Telegram fallback
  const link = document.getElementById("tgLink");
  if (link) {
    const phone = "77771404390";
    const appUrl = `tg://resolve?phone=${phone}`;
    const webFallback = `https://t.me/+${phone}`;
    link.addEventListener(
      "click",
      (e) => {
        const now = Date.now();
        link.setAttribute("href", appUrl);
        setTimeout(() => {
          if (Date.now() - now < 1800)
            window.open(webFallback, "_blank", "noopener");
        }, 700);
      },
      { passive: false }
    );
  }
});
