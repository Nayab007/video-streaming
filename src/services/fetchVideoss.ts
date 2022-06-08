import axios from "axios";



/* Fetching Data for Videos from API Endpoint */
const fetchVideos = async (page: number, limit: number) => {
  try {
    const res = await axios.get(
      `https://gist.githubusercontent.com/petgru/a5a2f70af630578df713851e9734f3a8/raw/teliatestdata.json`
    );

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchVideos;