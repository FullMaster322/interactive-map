document.querySelector("#elastic").oninput = function () {
  let val = this.value.trim();
  let elasticItems = document.querySelectorAll(".elastic li");
  if (val != "") {
    this.value = this.value[0].toUpperCase() + this.value.slice(1);
    elasticItems.forEach(function (elem) {
      if (elem.innerText.search(val) == -1) {
        elem.classList.remove("mark");
        elem.classList.add("hide");
        elem.innerHTML = elem.innerText;
      } else {
        elem.classList.remove("hide");
        elem.classList.add("mark");
      }
    });
  } else {
    elasticItems.forEach(function (elem) {
      elem.classList.remove("hide");
      elem.classList.remove("mark");
      elem.innerHTML = elem.innerText;
    });
  }
};
