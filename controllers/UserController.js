const User = require("../models/User");
const router = require("express").Router();

router.post("/create", (req, res, next) => {
  if (!req.body.name) {
    res.status(400).send({
      success: false,
      message: "a name is required"
    });
  } else {
    if (!req.body.email) {
      res.status(400).send({
        success: false,
        message: "a email is required"
      });
    } else {
      if (!req.body.password) {
        res.status(400).send({
          success: false,
          message: "a password is required"
        });
      } else {
        User.findOne({ email: req.body.email })
          .then((user) => {
            if (user) {
              res.status(400).send({
                success: false,
                message: "that email was already registered"
              });
            } else {
              User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
              })
                .then((newUser) => {
                  res.status(200).send({
                    user: newUser,
                    success: true,
                    message: "Registration successfull"
                  });
                })
                .catch((err) => {
                  next(err);
                });
            }
          })
          .catch((err) => {
            next(err);
          });
      }
    }
  }
});

router.post("/login", (req, res, next) => {
  if (!req.body.email) {
    res.status(400).send({
      success: false,
      message: "we need a email to log you in :)"
    });
  } else {
    if (!req.body.password) {
      res.status(400).send({
        success: false,
        message: "we need a password to log you in :)"
      });
    } else {
      User.findOne({ email: req.body.email })
        .then((user) => {
          if (user) {
            user.verifyPassword(req.body.password, (err, isMatch) => {
              if (err) {
                next(err);
              } else {
                if (isMatch) {
                  res.status(200).send({
                    user: { name: user.name, email: user.email },
                    success: true,
                    message: "Welcome back, nice to see you again"
                  });
                } else {
                  next({ success: false, message: "password did not match" });
                }
              }
            });
          } else {
            next({
              success: false,
              message:
                "we found no user with the email supplied: " + req.body.email
            });
          }
        })
        .catch((err) => {
          next(err);
        });
    }
  }
});

module.exports = router;
