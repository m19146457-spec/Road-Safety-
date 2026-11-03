const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton instanceof HTMLButtonElement && navigation instanceof HTMLElement) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Менюну ачуу");
    navigation.classList.remove("is-open");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Менюну ачуу" : "Менюну жабуу");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 680) closeMenu();
  });
}

const checklist = document.querySelector(".checklist-card");
const checklistCount = document.querySelector("#checklist-count");
const checklistProgress = document.querySelector("#checklist-progress");
const checklistReset = document.querySelector(".checklist-reset");

if (
  checklist instanceof HTMLElement &&
  checklistCount instanceof HTMLElement &&
  checklistProgress instanceof HTMLElement &&
  checklistReset instanceof HTMLButtonElement
) {
  const checkboxes = Array.from(checklist.querySelectorAll('input[type="checkbox"]'));

  const updateChecklist = () => {
    const checkedCount = checkboxes.filter((checkbox) => checkbox.checked).length;
    checklistCount.textContent = `${checkedCount} / ${checkboxes.length}`;
    checklistProgress.style.width = `${checkboxes.length === 0 ? 0 : (checkedCount / checkboxes.length) * 100}%`;
  };

  checkboxes.forEach((checkbox) => checkbox.addEventListener("change", updateChecklist));
  checklistReset.addEventListener("click", () => {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    updateChecklist();
  });
  updateChecklist();
}

const siteHeader = document.querySelector(".site-header");

if (siteHeader instanceof HTMLElement) {
  const updateHeader = () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
}