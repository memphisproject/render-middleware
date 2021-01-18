import axios, { AxiosRequestConfig } from "axios";
import { Router } from "express";
const router = Router();

router.get('/', (req, res) => {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: 'https://dev.memphis.io/api/v1/mosaic?_id=5f9ff760894ca830edd53b16',
    headers: { }
  };

  axios(config)
  .then(function (response) {
    const collection = response.data;
    res.render('index', { title: collection.title, image: collection.image ? collection.image : null });
  })
  .catch(function (error) {
    console.log(error);
  });

});

export { router }
