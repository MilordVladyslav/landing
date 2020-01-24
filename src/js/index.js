import 'babel-polyfill';
import _ from 'lodash';
import './../sass/styles.scss';
if (process.env.NODE_ENV !== 'production') {
  require('file-loader!../index.html')
}

document.getElementById('scroll-arrow').addEventListener('click', () => {
  let formula = document.getElementsByClassName('navigation')[0].offsetHeight + window.scrollY
  window.scrollBy({
    top: document.getElementById("content-sections").offsetTop - formula,
    behavior: 'smooth'
  });
})

document.addEventListener('scroll', () => {
  console.log(window.scrollY)
  if(window.scrollY) {
    document.getElementsByClassName('navigation')[0].classList.add('navigation-scrolled');
  } else {
    document.getElementsByClassName('navigation')[0].classList.remove('navigation-scrolled');
  }
})