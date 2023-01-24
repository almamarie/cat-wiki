type HeadersType = {
  "x-api-key": string;
  "Content-Type": string;
};
export async function GET_AJAX(endpoint: string) {
  const url = process.env.API_BASE_URL + endpoint;

  const headers = {
    "Content-Type": "application/json",
    "x-api-key": process.env.API_KEY || "",
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
