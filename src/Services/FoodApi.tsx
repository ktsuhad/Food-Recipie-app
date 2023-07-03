import axios from "axios";

const YOUR_APP_ID = import.meta.env.VITE_APP_ID;
const YOUR_APP_KEY = import.meta.env.VITE_APP_KEY;

export const getRecipie = async (query: string) => {
  try {
    const { data } = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
    );
    return data.hits;
  } catch (error) {
    console.log(error);
  }
};
