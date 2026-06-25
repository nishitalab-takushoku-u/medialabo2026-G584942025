document.querySelector("#calc").onclick = () => {
  document.querySelector("#answer").textContent =
    +document.querySelector("#left").value + +document.querySelector("#right").value;
};
