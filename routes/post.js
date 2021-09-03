const express = require("express");
const router = express.Router();

router.post(
  "/users",
  async (req, res) => {

    const { firstname, lastname, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);

    data.users.push({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hash,
    });

    res.redirect("/users");
  }
);
