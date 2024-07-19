// netlify/functions/news.js
const axios = require("axios");

exports.handler = async function (event, context) {
  const category = event.queryStringParameters.category || "general";
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${apiKey}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch news" }),
    };
  }
};
