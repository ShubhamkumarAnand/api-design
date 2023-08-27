import jwt from "jsonwebtoken";

export const createJWT = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.JWT_SECRET
  );
  return token;
};

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer) {
    res.status(401);
    res.json({ message: "not authorized" });
    return;
  }

  const [, token] = bearer.split(" ");
  if (!token) {
    res.status(401);
    res.json({ message: "Not a Valid Token!" });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    console.log(user);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401);
    res.json({ message: "User not identified" });
    return;
  }
};
