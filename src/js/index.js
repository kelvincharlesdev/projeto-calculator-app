const body = document.querySelector("body");

const temaUm = document.querySelector(".calc-tema1");

temaUm.addEventListener("click", () => {
  body.classList.add("tema1");
  body.classList.remove("tema2");
  body.classList.remove("tema3");
});

const temaDois = document.querySelector(".calc-tema2");
temaDois.addEventListener("click", () => {
  body.classList.remove("tema1");
  body.classList.remove("tema3");
  body.classList.add("tema2");
});

const temaTres = document.querySelector(".calc-tema3");
temaTres.addEventListener("click", () => {
  body.classList.remove("tema1");
  body.classList.remove("tema2");
  body.classList.add("tema3");
});

let numbers = document.querySelectorAll(".number");

numbers.forEach((n) => {
  n.addEventListener("click", () => {
    document.querySelector(".display").value += n.value;
  });
});

const reset = document.querySelector(".rest");
reset.addEventListener("click", () => {
  document.querySelector(".display").value = "";
});

const removerUltimoNumero = document.querySelector(".del");
removerUltimoNumero.addEventListener("click", () => {
  let display = document.querySelector(".display").value;
  document.querySelector(".display").value = display.substr(0, display.length - 1 );
});

const resultado = document.querySelector(".igual");
resultado.addEventListener("click", () => {
  let display = document.querySelector(".display").value;
  document.querySelector(".display").value = eval(display);
  if (display == "") {
    document.querySelector(".display").value = "";
  }
});
