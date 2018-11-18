const block12 = document.querySelector(`.js-block12`);
const popUpWrap = document.querySelector(`.pop-up__wrapper`);
const popUpBtn = document.querySelector(`.pop-up__btn`);
const popUp = document.querySelector(`.pop-up`);

function initKeys(wrapper, content) {
  // закрытие по клику вне окна
  wrapper.addEventListener("click", function(event) {
    event.preventDefault();
    if (!content.contains(event.target)) {
      wrapper.classList.add("smooth-display__elem--hide");
    }
  });

  // закрытие по esc
  window.addEventListener(`keydown`, function(event) {
    if (event.key === `Escape` && !popUpWrap.classList.contains("smooth-display__elem--hide")) {
      wrapper.classList.add("smooth-display__elem--hide");
    }
  });
}

smoothDisplay(popUpWrap, `0.3s`, block12, popUpBtn);
initKeys(popUpWrap, popUp);
