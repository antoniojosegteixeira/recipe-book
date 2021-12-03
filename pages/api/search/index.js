import axios from "axios";
import db from "../../../utils/db";
import nc from "next-connect";
import { BASE_URL } from "../../../utils/config";

const handler = nc();

handler.get(async (req, res) => {
  try {
    const query = req.query;
    res.send(query);
  } catch (err) {
    console.log(err);
  }
});

export default handler;
