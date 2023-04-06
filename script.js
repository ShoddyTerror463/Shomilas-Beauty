// Select all the <ul> elements on the page
const ulElements = document.querySelectorAll('ul');

// Loop through each <ul> element
ulElements.forEach(ul => {
  // Set the initial transform style to move the element off the screen to the left
  ul.style.transform = 'translateX(-100%)';
  
  // Add a scroll event listener to the window
  window.addEventListener('scroll', () => {
    // Calculate the distance scrolled from the top of the page
    const scrollDistance = window.scrollY;
    
    // Get the top position of the <ul> element on the page
    const ulTop = ul.getBoundingClientRect().top + window.scrollY;
    
    // Check if the <ul> element is now visible on the screen
    if (scrollDistance + window.innerHeight > ulTop + ul.offsetHeight / 2) {
      // If it is, animate the element back onto the screen
      ul.style.transform = 'translateX(0)';
    }
  });
});

