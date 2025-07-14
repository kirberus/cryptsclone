const classSelect = document.getElementById("class");
const eventSelect = document.getElementById("event");
const emailInput = document.getElementById("email");
const extraFields = document.getElementById("extra-fields");

const eventsByClass = {
  "4": ["Scratch Xplorers (Game Dev)"],
  "5": ["Scratch Xplorers (Game Dev)"],
  "6": ["IHE Kernel", "Byte the Site", "QWERTY 3.0", "Visual Wit"],
  "7": ["IHE Kernel", "Byte the Site", "QWERTY 3.0", "Visual Wit"],
  "8": ["IHE Kernel", "Byte the Site", "QWERTY 3.0", "Visual Wit", "IHE CinePrism", "PixelPulse", "Mission: Decrypt"],
  "9": ["IHE Kernel", "Mission: Decrypt", "IHE CinePrism", "PixelPulse", "Visual Wit"],
  "10": ["IHE Kernel", "Mission: Decrypt", "IHE CinePrism", "PixelPulse", "Visual Wit"],
  "11": ["IHE Kernel", "IHE CodeQuest", "Mission: Decrypt", "Portfolio Design", "PixelPulse", "IHE CinePrism", "Visual Wit", "Byte the Site"],
  "12": ["IHE Kernel", "IHE CodeQuest", "Mission: Decrypt", "Portfolio Design", "PixelPulse", "IHE CinePrism", "Visual Wit", "Byte the Site"]
};

classSelect.addEventListener("change", () => {
  const selected = classSelect.value;
  const options = eventsByClass[selected] || [];

  eventSelect.innerHTML = options.length
    ? '<option value="">Select event</option>' + options.map(ev => `<option value="${ev}">${ev}</option>`).join('')
    : '<option value="">No events available</option>';
});

emailInput.addEventListener("input", () => {
  const emailValue = emailInput.value.trim();
  if (emailValue.length > 3 && emailValue.includes("@")) {
    extraFields.classList.add("show");
  } else {
    extraFields.classList.remove("show");
  }
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
  
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
      });
  
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function () {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
        });
      });
    }
  });
  
  