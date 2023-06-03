import axios from 'axios';

const API_KEY = '36259510-7240acb947e1545cb3b70765a';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 15,
};

export const getImages = async (query, page) => {
  const { data } = await axios.get(`?key=${API_KEY}&q=${query}&page=${page}`);
  console.log(data)
  return data;
};
