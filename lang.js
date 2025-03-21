
const translations = {
  ar: {
    login_title: "تسجيل الدخول",
    login_button: "دخول"
  },
  de: {
    login_title: "Anmeldung",
    login_button: "Einloggen"
  }
};

function setLang(lang) {
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
}

window.onload = () => {
  const savedLang = localStorage.getItem("lang") || "ar";
  setLang(savedLang);
};
