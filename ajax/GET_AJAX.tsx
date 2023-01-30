type HeadersType = {
  "x-api-key": string;
  "Content-Type": string;
};
export async function GET_AJAX(endpoint: string) {
  // const url = process.env.API_BASE_URL + endpoint;
  const url = "https://api.thecatapi.com/v1" + endpoint;
  console.log("url here: ", url);

  const headers = {
    "Content-Type": "application/json",
    "x-api-key":
      process.env.API_KEY ||
      "live_CM35ijez8Y8P4fher8dYt7fCxCTcfwFQXe1BDf73UPonxqJt5TE2ID6vOuT1DwWG",
  };
  try {
    const response = await fetch(url, {
      method: "GET",
      headers,
    });

    const data = await response.json();

    return { success: true, message: data };
  } catch (error) {
    return { success: false, message: "an error occured" };
  }
}
