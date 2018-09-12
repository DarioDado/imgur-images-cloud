import qs from 'qs';
import Axios from 'axios';
const CLIENT_ID = '9d9bf7f523254c8';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token',
    }
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
  },
  async fetchImages(token) {
    const response = await Axios.get(`${ROOT_URL}/3/account/me/images`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  },
  uploadImages(images,token) {
    const promises = Array.from(images).map(image => {
      const formdata = new FormData();
      formdata.append('image', image);
      return Axios.post(`${ROOT_URL}/3/image`, formdata, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
    });
    return Promise.all(promises);
  },
}