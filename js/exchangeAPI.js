export async function getExchangeRate(from, to) {
  const apiKey = "dec643d91ba3fe99619f1987c4b54fe7";
  const url = `https://api.exchangeratesapi.io/v1/convert?access_key=${apiKey}&format=1`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data.rates[to] || null;
  } catch (error) {
    console.error("Error al obtener tasas de cambio:", error);
    return null;
  }
}
