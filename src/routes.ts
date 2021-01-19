import axios, { AxiosRequestConfig } from "axios";
import { Router } from "express";
const router = Router();

router.get('/:user/:name/:id', (req, res) => {
  const { id } = req.params;
  const config: AxiosRequestConfig = {
    method: 'get',
    url: `https://dev.memphis.io/api/v1/mosaic?_id=${id}`,
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
