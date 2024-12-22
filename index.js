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