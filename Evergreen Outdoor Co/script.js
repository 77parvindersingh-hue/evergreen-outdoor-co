
/* =========================================
   EVERGREEN OUTDOOR CO.
   Website interactions
   ========================================= */


/* 1. Mobile navigation */

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");

if (menuToggle && navigation) {

  menuToggle.addEventListener("click", () => {

    // Toggle the mobile menu open or closed
    const isOpen = navigation.classList.toggle("is-open");

    // Keep accessibility attributes in sync
    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

  });


  // Close the mobile menu after a navigation link is clicked
  navigation.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      navigation.classList.remove("is-open");

      menuToggle.setAttribute("aria-expanded", "false");

      menuToggle.setAttribute(
        "aria-label",
        "Open navigation"
      );

    });

  });

}


/* 2. Automatically update the copyright year */

const yearElement = document.querySelector("#year");

if (yearElement) {

  yearElement.textContent = new Date().getFullYear();

}


/* 3. Enquiry form interaction */

const estimateForm = document.querySelector("#estimate-form");
const formStatus = document.querySelector("#form-status");

if (estimateForm && formStatus) {

  estimateForm.addEventListener("submit", (event) => {

    // Prevent the browser from reloading the page
    event.preventDefault();

    // Check required fields and email format
    if (!estimateForm.reportValidity()) {
      return;
    }

    // Read the visitor's name
    const nameInput = document.querySelector("#name");
    const name = nameInput.value.trim();

    // Show a demo confirmation
    formStatus.textContent =
      `Thanks, ${name || "there"}! This is a demo only; no enquiry has been sent. Connect a form service before using this for a real business.`;

  });

}
