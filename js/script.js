"use strict";

const elopen_btn = document.querySelector(".open-btn");
const elclose_btn = document.querySelector(".close-btn");
const eloverflow = document.querySelector(".overflow");
const ntf_popup = document.querySelector(".notification-pop-up");

const popup = function () {
  ntf_popup.classList.toggle("visually-hidden");
  eloverflow.classList.toggle("visually-hidden");
};
elopen_btn.addEventListener("click", popup);
elclose_btn.addEventListener("click", popup);
eloverflow.addEventListener("click", popup);
