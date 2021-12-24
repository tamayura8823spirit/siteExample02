const child = document.querySelector('.child');
const cb = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      console.log('inview');
      entry.target.classList.add('inview');
      // observer.unobserve(entry.target)
    } else {
      console.log('out view');
      entry.target.classList.remove('inview');
    }
  })
}
const options = {
  rootMargin: "-100px 0px",
  threshold: 1
}
const io = new IntersectionObserver(cb, options);
io.observe(child);
// io.observe(child2);
// io.observe(child3);