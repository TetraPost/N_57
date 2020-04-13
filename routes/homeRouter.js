const express = require('express');

const homeRouter = express.Router();

const multer = require('multer');

const upload = multer({ dest: 'public/upload' });

const homeController = require('../controllers/homeController');

homeRouter.get('/', homeController.index);

/* Проверяем куки */
homeRouter.post('/getCookies', upload.none(), async (req, res, next) => {
  try {
    const getCookies = await homeController.getCookies(req, res);
    return res.json({ resp: getCookies });
  } catch (error) {
    console.log(error);
  }
});

module.exports = homeRouter;
