$(document).ready(function() {
  let autoScrollInterval; // Store the interval ID

  function autoScroll() {
      const container = $(".testimonial-container");
      const firstTestimonial = container.find(".testimonial:first");
      const testimonialWidth = firstTestimonial.outerWidth(true);

      container.animate({
          scrollLeft: "+=" + testimonialWidth
      }, 1000, "linear", function() {
          if (container.scrollLeft() >= (container[0].scrollWidth - container.width())) {
              container.scrollLeft(0);
          }
          clearInterval(autoScrollInterval); // Clear existing interval
          autoScrollInterval = setTimeout(autoScroll, 3000); // Set new interval
      });
  }

  // Start auto-scrolling AFTER the DOM is fully loaded
  autoScrollInterval = setTimeout(autoScroll, 4000); // Initial delay
});

//Contact us form

document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const data = {
      name,
      email,
      message,
    };
    fetch('https://api.raghunathdas704@gmail.com/send', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert('Your message has been sent successfully!');
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again.');
    });
  });