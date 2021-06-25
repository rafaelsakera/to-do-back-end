let jwt = require("jsonwebtoken");

import { ACCESS_TOKEN_SECRET } from "../utils/TokenUtils";

const authenticateToken = (req: any, res: any, next: Function) => {
  const authHeader = req.headers["auth-token"];
  const token = authHeader && authHeader;

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

export default authenticateToken;
