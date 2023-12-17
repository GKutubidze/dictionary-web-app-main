const dictonaryApi = async (word: string) => {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      // Handle the case when the response status is not 200 (OK)
      throw new Error("Failed to fetch data from the API");
    }
  } catch (error) {
    // Handle any errors that occur during the fetch
    throw error;
  }
};

export default dictonaryApi;
