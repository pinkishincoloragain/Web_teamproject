import axios from "axios";

export const searchNews = async (query, callback) => {
  const arr = [];
  console.log("query: " + query);
  const response = await axios.get("naverNews.php?w3=" + query);
  console.log(response.data);
  response.data.forEach((row) => {
    arr.push(row);
  });
  callback(arr);
};
