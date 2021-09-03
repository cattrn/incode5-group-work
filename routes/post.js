const express = require("express");
const router = express.Router();
const {
  check,
  expressValidator,
  validationResult,
} = require("express-validator");

router.post(
  "/users",
  [
    check("firstname", "First Name must be 3 or more characters!")
      .exists()
      .isLength({ min: 3 }),
    check("lastname", "Last Name must be 3 or more characters!")
      .exists()
      .isLength({ min: 3 }),
    check("email", "Please enter valid email address!")
      .exists()
      .isEmail()
      .normalizeEmail(),
    check("password", "Password must be atleast 8 characters")
      .exists()
      .isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    const { firstname, lastname, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);

    if (!errors.isEmpty()) {
      const errorMsgs = errors.array();
      res.render("pages/add_user", {
        errorMsgs,
      });
    }

    data.users.push({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hash,
    });

    res.redirect("/users");
  }
);
