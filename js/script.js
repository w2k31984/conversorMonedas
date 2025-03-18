import { getExchangeRate } from "./exchangeAPI.js";

document.addEventListener("DOMContentLoaded", () => {
  const fromCurrency = document.getElementById("fromCurrency");
  const toCurrency = document.getElementById("toCurrency");
  const amount = document.getElementById("amount");
  const convertButton = document.getElementById("convertButton");
  const result = document.getElementById("result");

  convertButton.addEventListener("click", async () => {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amountValue = parseFloat(amount.value);

    if (isNaN(amountValue) || amountValue <= 0) {
      result.textContent = "Por favor, ingrese un monto válido";
      return;
    }

    try {
      const rate = await getExchangeRate(from, to);
      if (rate) {
        const convertedAmount = (amountValue * rate).toFixed(2);
        result.textContent = `${amountValue} ${from} = ${convertedAmount} ${to}`;
      } else {
        result.textContent = "No se encontró la tasa de cambio";
      }
    } catch (error) {
      console.error("Error obteniendo la tasa de cambio:", error);
      result.textContent = "Error obteniendo la tasa de cambio";
    }
  });
});
