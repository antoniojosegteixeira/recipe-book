import axios from "axios";

const fetcher = (...args) => axios.create(...args).then((res) => res.data);

export default fetcher;
