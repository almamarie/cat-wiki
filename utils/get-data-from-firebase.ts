export const getBreedsFromFirebase = async () => {
  try {
    const response = await fetch(
      "https://cat-wiki-a00ec-default-rtdb.firebaseio.com/search-history.json"
    );
    const data = await response.json();
    return { success: true, message: data };
  } catch (error) {
    return { success: false, message: "an error occured" };
  }
};
