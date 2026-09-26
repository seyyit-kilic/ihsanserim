(function () {
  var en = {
    "meta.title": "İhsan Serim · Field Manager, Petrol Ofisi",
    "meta.description": "İhsan Serim — Field Manager at Petrol Ofisi. Sales, marketing and market development in the fuel retail industry.",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "hero.eyebrow": "Hello, I'm",
    "hero.role": "Field Manager",
    "hero.location": "Balıkesir, Türkiye",
    "hero.email": "Send an email",
    "hero.vcard": "Save contact",
    "hero.photoAlt": "Portrait of İhsan Serim",
    "about.title": "About",
    "about.text": "I'm a business administration graduate of Marmara University, working in sales, marketing and market development in the fuel retail industry, from station management to field operations. I currently serve as Field Manager at Petrol Ofisi, responsible for the Balıkesir region.",
    "about.skillsLabel": "Skills",
    "skills.sales": "Sales & Marketing",
    "skills.presentations": "Sales Presentations",
    "skills.market": "Market Development",
    "exp.title": "Experience",
    "exp.po.date": "Sep 2026 – Present",
    "exp.po.role": "Field Manager",
    "exp.po.loc": "Balıkesir, Türkiye",
    "exp.teksu.date": "Sep 2021 – 2026",
    "exp.teksu.role": "Operations Manager",
    "exp.teksu.loc": "Kayseri, Türkiye",
    "exp.inov.date": "Jul 2020 – Jan 2021",
    "exp.inov.role": "Project Assistant",
    "exp.inov.loc": "Istanbul, Türkiye",
    "edu.title": "Education",
    "edu.school": "Marmara University",
    "edu.faculty": "Faculty of Business Administration",
    "edu.degree": "Bachelor's Degree · Business Administration and Management",
    "patent.title": "Patent",
    "patent.kicker": "Invention",
    "patent.name": "Elevator Keypad with Touchless, Voice and Sensor-Based Command Features",
    "patent.fileNo": "File No",
    "patent.search": "Search on TÜRKPATENT →",
    "certs.title": "Certifications",
    "certs.c1": "Master Instructor Certificate",
    "certs.c2": "Technical Personnel Qualification License for Banks and Insurance Agencies",
    "certs.c3": "Hygiene Certificate",
    "posts.title": "Writing",
    "posts.date": "January 10, 2021",
    "posts.summary": "An essay (in Turkish) on water scarcity, food security and food waste.",
    "posts.read": "Read the article →",
    "contact.title": "Contact",
    "contact.text": "For collaborations or just to connect, reach out by email or on LinkedIn."
  };

  var tr = {};
  var textNodes = document.querySelectorAll("[data-i18n]");
  var altNodes = document.querySelectorAll("[data-i18n-alt]");
  var ariaNodes = document.querySelectorAll("[data-i18n-aria]");
  var metaDesc = document.querySelector('meta[name="description"]');

  textNodes.forEach(function (el) { tr[el.dataset.i18n] = el.textContent; });
  altNodes.forEach(function (el) { tr[el.dataset.i18nAlt] = el.alt; });
  ariaNodes.forEach(function (el) { tr[el.dataset.i18nAria] = el.getAttribute("aria-label"); });
  tr["meta.title"] = document.title;
  tr["meta.description"] = metaDesc.content;

  function apply(lang) {
    var dict = lang === "en" ? en : tr;
    textNodes.forEach(function (el) { el.textContent = dict[el.dataset.i18n]; });
    altNodes.forEach(function (el) { el.alt = dict[el.dataset.i18nAlt]; });
    ariaNodes.forEach(function (el) { el.setAttribute("aria-label", dict[el.dataset.i18nAria]); });
    document.title = dict["meta.title"];
    metaDesc.content = dict["meta.description"];
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
  }

  function store(lang) {
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  function initialLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "en" || q === "tr") return q;
    try {
      var saved = localStorage.getItem("lang");
      if (saved === "en" || saved === "tr") return saved;
    } catch (e) {}
    return (navigator.language || "tr").toLowerCase().indexOf("tr") === 0 ? "tr" : "en";
  }

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () {
      apply(b.dataset.lang);
      store(b.dataset.lang);
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  var lang = initialLang();
  if (lang !== "tr") apply(lang);
})();
