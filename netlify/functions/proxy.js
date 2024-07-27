export async function handler() {
  const response = await fetch("https://npi-db.org/api/:id");
  const data = await response.json();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  };
}
