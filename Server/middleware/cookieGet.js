const cookieGet = (req) => {
  if (req.cookies && req.cookies.token) {
    return req.cookies.token;
  } else {
    return null;
  }
};

module.exports = cookieGet;
