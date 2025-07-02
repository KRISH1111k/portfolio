let menuToggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');

menuToggle.onclick = function () {
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
};

const links = document.querySelectorAll('.menu li');
const sections = document.querySelectorAll('.content section');

links.forEach((item) => {
  item.addEventListener('click', function () {
    links.forEach((el) => el.classList.remove('active'));
    item.classList.add('active');

    const target = item.querySelector('a').dataset.section;
    sections.forEach((sec) => {
      sec.classList.remove('active-section');
      if (sec.id === target) {
        sec.classList.add('active-section');
      }
    });
  });
});
