(function () {
  var isAscent = /\/ascent(\/|$)/.test(window.location.pathname.replace(/\\/g, "/"));
  if (isAscent) {
    document.documentElement.classList.add("ascent-site");
  }

  function getLinksContainer(nav) {
    return nav.querySelector(".mobile-nav-links") || nav.querySelector(":scope > div:last-child");
  }

  function initNav() {
    var nav = document.querySelector("nav");
    if (!nav) return false;

    var links = getLinksContainer(nav);
    if (!links) return false;

    links.classList.add("mobile-nav-links");

    if (nav.dataset.mobileInit) {
      return true;
    }

    var button = nav.querySelector(".mobile-nav-toggle");
    if (!button) {
      button = document.createElement("button");
      button.className = "mobile-nav-toggle";
      button.type = "button";
      button.setAttribute("aria-label", "Menu");
      button.setAttribute("aria-expanded", "false");
      button.innerHTML = "<span></span><span></span><span></span>";
      nav.insertBefore(button, links);
    }

    button.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
      });
    });

    nav.dataset.mobileInit = "1";
    return true;
  }

  var attempts = 0;
  function boot() {
    attempts += 1;
    if (!initNav() && attempts < 80) {
      window.setTimeout(boot, 100);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  var observer = new MutationObserver(function () {
    initNav();
  });

  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
