import Notiflix from 'notiflix';
import axios from 'axios';

async function fetchData(path) {
  try {
    const response = await axios.get(path);
    return response.data;
  } catch (error) {
    Notiflix.Notify.error(error);
    return;
  }
}

export default fetchData;
