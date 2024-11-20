const menuIcon = document.getElementById('menu-icon');
const navAside = document.getElementById('nav-aside');
const menuOverlay = document.querySelector('.menu-overlay');
const navLinks = document.querySelectorAll('.nav__link');

function toggleNav() {
    navAside.classList.toggle('open');
    menuOverlay.style.opacity = navAside.classList.contains('open') ? '1' : '0';
    menuOverlay.style.transform = navAside.classList.contains('open') ? 'translateX(0)' : 'translateX(100%)';
    menuIcon.classList.toggle('close-icon');
}

function closeNav() {
    navAside.classList.remove('open');
    menuOverlay.style.opacity = '0';
    menuOverlay.style.transform = 'translateX(100%)';
}

// Toggle navigation on menu icon click
menuIcon.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click propagation to document
    toggleNav();
});

// Close navigation on clicking a navigation link
navLinks.forEach(link => {
    link.addEventListener('click', closeNav);
});

// Close navigation when clicking outside of it
document.addEventListener('click', (event) => {
    if (!navAside.contains(event.target) && navAside.classList.contains('open')) {
        closeNav();
    }
});



function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const phrases = ["a front-end developer", "i love to code..",];
  const el = document.getElementById("typewriter");

  let sleepTime = 100;

  let curPhraseIndex = 0;

  const writeLoop = async () => {
    while (true) {
      let curWord = phrases[curPhraseIndex];

      for (let i = 0; i < curWord.length; i++) {
        el.innerText = curWord.substring(0, i + 1);
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 10);

      for (let i = curWord.length; i > 0; i--) {
        el.innerText = curWord.substring(0, i - 1);
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 5);

      if (curPhraseIndex === phrases.length - 1) {
        curPhraseIndex = 0;
      } else {
        curPhraseIndex++;
      }
    }
  };

  writeLoop();



// SKILLS

  
//PROJECTS

const cards = document.querySelectorAll('.projects__cta');
const cardDataContainers = document.querySelectorAll('.projects__card-data');
const overlay = document.querySelector('.projects__bg-overlay');
cards.forEach(card => {
    card.addEventListener('click', () => {
        const cardId = card.getAttribute('data-card');
        const dataContainer = document.getElementById(`card-data-${cardId}`);

      
        cardDataContainers.forEach(container => container.classList.remove('active'));

        dataContainer.classList.add('active');

    
        overlay.classList.add('active');
    });
});

cardDataContainers.forEach(container => {
    container.querySelector('.projects__close-btn').addEventListener('click', () => {
        container.classList.remove('active');
        overlay.classList.remove('active'); 
    });
});



// Close each data container when the close button is clicked
// cardDataContainers.forEach(container => {
//     container.querySelector('.close-btn').addEventListener('click', () => {
//         container.classList.remove('active');
//     });
// });


var btnContainer = document.getElementById("nav-ul");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-li");


// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll('.item-project');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  let itemsToShow = 3;
  let totalItems = items.length;

  // Initially show the first three items
  function showItems() {
      items.forEach((item, index) => {
          if (index < itemsToShow) {
              item.classList.remove('hidden');
              // Animate items
              setTimeout(() => {
                  item.style.opacity = '1';
                  item.style.transform = 'translateY(0)';
              }, index * 25); // Slight delay for animation effect
          }
      });

      // Hide the button if all items are visible
      if (itemsToShow >= totalItems) {
          loadMoreBtn.style.display = 'none';
      }
  }

    // Load more items on button click
    loadMoreBtn.addEventListener('click', function() {
      itemsToShow += window.innerWidth <= 767 ? 1 : 3; // Adjust based on screen width
      showItems();
  });

  // Hide all items initially
  items.forEach(item => item.classList.add('hidden'));

  // Show the first set of items
  showItems();
});
