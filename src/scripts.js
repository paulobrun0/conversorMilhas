const btnCalc = document.querySelector("#calcular");
const btnLimpar = document.querySelector("#limpar");

const km = document.querySelector("#kilometros");
const milhas = document.querySelector("#milhas");

const limparInput = () => {
  km.value = "";
  milhas.value = "";
};

const calcularMilhas = () => {
  const milhas = document.querySelector("#milhas").value;
  const valorUmaMilha = 1.60934;

  km.value = milhas * valorUmaMilha.toFixed(2);
};

btnLimpar.addEventListener("click", (e) => {
  e.preventDefault();
  limparInput();
});

btnCalc.addEventListener("click", (e) => {
  e.preventDefault();
  calcularMilhas();
});
