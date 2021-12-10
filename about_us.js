const sliders = document.querySelectorAll(".slide-in");
const background = document.querySelector(".background")
const appearOptions = {
  // threshold: 0,
  rootMargin: "0px 0px -150px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});
        
document.addEventListener('scroll', () => {
    const scroll = window.scrollY

    if (scroll !== 0) {
        background.style.backgroundPosition = `calc(30% + ${scroll}px) calc(70% + ${scroll}px)`
    }else{
        background.style.backgroundPosition = ''
    }
})

window.onbeforeunload = () => window.scrollTo(0, 0);
