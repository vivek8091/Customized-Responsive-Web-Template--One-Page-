// // Disable browser scroll restoration
// if ("scrollRestoration" in history) {
//   history.scrollRestoration = "manual";
// }

// // Scroll to the top on page load
// window.addEventListener("load", function () {
//   window.scrollTo(0, 0);
// });

document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        console.log("Observed element:", entry.target);
        if (entry.isIntersecting) {
          console.log("Animating element:", entry.target);
          entry.target.classList.add("animate-active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  targets.forEach((target) => {
    observer.observe(target);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const target1 = document.querySelectorAll(".info");
  const target2 = document.querySelectorAll(".info_img");

  const observer1 = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        console.log("Observed element:", entry.target);
        if (entry.isIntersecting) {
          console.log("Animating element:", entry.target);
          entry.target.classList.add("info-animate");
          entry.target.classList.add("img-animate");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  target1.forEach((target) => {
    observer1.observe(target);
  });

  target2.forEach((target) => {
    observer1.observe(target);
  });
});

// Select the header element
const header = document.querySelector(".header");

// Add a scroll event listener to the window
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled"); // Add the scrolled class when the page is scrolled down
  } else {
    header.classList.remove("scrolled"); // Remove the scrolled class when at the top of the page
  }
});

document.querySelectorAll('.main .text a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor click behavior

    const targetId = this.getAttribute("href"); // Get target ID
    const targetSection = document.querySelector(targetId); // Select target section

    if (targetSection) {
      // Calculate the scroll position with a 10% offset
      const offset = window.innerHeight * 0.09;
      const targetPosition = targetSection.offsetTop - offset;

      window.scrollTo({ // Smoothly scroll to the calculated position
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});



// Select all menu links and sections
const menuLinks = document.querySelectorAll(".menu ul li a");
const sections = document.querySelectorAll("div[id]");
const headerHeight = document.querySelector(".header").offsetHeight;

menuLinks.forEach((link) => { // Smooth scroll when clicking on menu links
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const position = targetSection.offsetTop - headerHeight; // Adjust for header height
      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  });
});

menuLinks.forEach((link) => { // Add click event listener to menu links
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      smoothScroll(targetSection, 800); // Base duration (800ms), adjustable as needed
    }
  });
});



window.addEventListener("scroll", () => { // Update active link based on scrolling
  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - headerHeight; // Adjust for header height
    const sectionBottom = sectionTop + section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      currentSectionId = section.id;
    }
  });

  // Remove active class from all links
  menuLinks.forEach((link) => link.parentElement.classList.remove("active"));

  // Add active class to the current link
  if (currentSectionId) {
    const activeLink = document.querySelector(
      `.menu ul li a[href="#${currentSectionId}"]`
    );
    if (activeLink) activeLink.parentElement.classList.add("active");
  }
});



// Pricing Item Animation //
document.addEventListener("DOMContentLoaded", () => {
  const pricingItems = document.querySelectorAll(".pricing-item");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Delay each item's animation based on its index
          const delay = Array.from(pricingItems).indexOf(entry.target) * 150; // 300ms between each
          setTimeout(() => {
            entry.target.classList.add("animate");
          }, delay);

          // Stop observing the element after animating
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the item is visible
  );

  pricingItems.forEach((item) => observer.observe(item));
});


// Navbar Toggle

// Select the toggle button and menu
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const menu = document.querySelector('.menu');

// Add click event listener to the toggle button
mobileNavToggle.addEventListener('click', () => {
  menu.classList.toggle('mobile-nav-active');
  document.body.classList.toggle('no-scroll');
  if (mobileNavToggle.classList.contains('bi-list')) {
    mobileNavToggle.classList.replace('bi-list', 'bi-x');
  } else {
    mobileNavToggle.classList.replace('bi-x', 'bi-list');
  }
});



// Scroll To Top
const scrollTop = document.querySelector(".scroll-top");

// Add a scroll event listener to the window
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    scrollTop.classList.add("active-scroll"); // Add the scrolled class when the page is scrolled down
  } else {
    scrollTop.classList.remove("active-scroll"); // Remove the scrolled class when at the top of the page
  }
});

scrollTop.addEventListener("click", () =>{
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})