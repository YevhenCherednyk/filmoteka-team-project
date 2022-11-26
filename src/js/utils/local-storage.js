export default class LocalStorage {
  save = (key, value) => {
    try {
      const filmInfoStringified = JSON.stringify(value);
      localStorage.setItem(key, filmInfoStringified);
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
  };

  load = key => {
    try {
      const filmInfoStringified = localStorage.getItem(key);
      return filmInfoStringified === null
        ? undefined
        : JSON.parse(filmInfoStringified);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  };

  remove = key => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  };
}