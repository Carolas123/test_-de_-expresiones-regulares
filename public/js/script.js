document.getElementById("validateButton").addEventListener("click", () => {
  let regexInput = document.getElementById("regexInput").value;
  let textInput = document.getElementById("textInput").value;
  let resultDiv = document.getElementById("result");

  try {
    let regex = new RegExp(regexInput);
    let isMatch = regex.test(textInput);

    resultDiv.className = `alert mt-3 ${isMatch ? "alert-success" : "alert-warning"}`;
    resultDiv.innerText = isMatch
      ? "¡Coincidencia encontrada en el texto!"
      : "No se encontró ninguna coincidencia.";
  } catch (error) {
    resultDiv.className = "alert alert-danger mt-3";
    resultDiv.innerText = "Expresión regular no válida.";
  }

  resultDiv.classList.remove("d-none");
});
