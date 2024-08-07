const jwt = require("jsonwebtoken");

class Auth {
  static authenticate(req, res, next) {
    // TODO: cek apakah user punya token/ga & ambil payloadnya
    // 1. get token dari header
    const authHeader = req.get("Authorization");

    // 2. check token existence
    let token;
    if (authHeader && authHeader.startsWith("Bearer"))
      token = authHeader.split(" ")[1];
    else
      return res.status(401).send({
        message: "Silahkan login",
        data: null,
      });

    // 3. validate token
    const jwtSecret = "SECRET";
    const payload = jwt.verify(token, jwtSecret);

    req.userEmail = payload.email;

    next();
  }

  static checkUserIsDian(req, res, next) {
    // TODO: pastikan user yang masuk payloadnya adalah dian@gmail.com
    if (req.userEmail === "dian@gmail.com") {
      next();
    } else {
      return res.status(401).send({
        message: "User bukan dian",
        data: null,
      });
    }
  }
}

module.exports = Auth;
