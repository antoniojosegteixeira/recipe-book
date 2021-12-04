import axios from "axios";
import db from "../../../utils/db";
import nc from "next-connect";
import { BASE_URL } from "../../../utils/config";

const handler = nc();

handler.get(async (req, res) => {
  try {
    const query = req.query;
    const url = `${BASE_URL}/complexSearch`;
    const options = {
      params: {
        ...query,
        apiKey: process.env.API_KEY,
      },
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(url, options);
    return res.send(data);
  } catch (err) {
    console.log(err);
  }
});

export default handler;
