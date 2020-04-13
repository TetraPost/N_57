const uniqid = require('uniqid');

const CookieModel = require('../models/cookie.js');


module.exports.index = async function (req, res) {
  res.render('index', { title: 'Cookies'});
};

const getCookies = async (req, res) => {
  try {
    const uniq = uniqid();
    // если нет куки - пишем в коллекцию, отправляем куки в браузер
    if (!req.cookies.cookieName) {
      const cookiesM = await new CookieModel({ cid: uniq });
      await cookiesM.save();
      res.cookie('cookieName', uniq, { maxAge: 900000, httpOnly: true });
      return uniq;
    }
    return req.cookies.cookieName;
  } catch (error) {
    console.log(error);
  }
};

module.exports.getCookies = getCookies;
