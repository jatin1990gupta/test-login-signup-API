const User = require('../models/user');

exports.getData = (req, res, next) => {
  User.find()
    .then(user => {
      if (user.length > 0) {
        data = [];
        user.map(val => data.push({ username: val.username }));
        res.json(data);
      } else {
        res.status(404).json({
          message: "No Data found."
        });
      }
    })
    .catch(err => {
      res.status(404).json({
        message: "Can't fetch data."
      });
    });
}

exports.postLogin = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username: username })
    .then(user => {
      if (user.password === password) {
        return res.status(200).json(user);
      }
      return res.status(500).json({
        message: "Invalid Password"
      });
    })
    .catch(err => {
      res.status(404).json({
        message: "User not found"
      });
    });
}

exports.postRegister = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const password = req.body.password;

  const nwUser = new User({
    username: email.split('@')[0],
    password: password,
    name: name,
    email: email,
    phone: phone
  })

  nwUser.save()
    .then(result => {
      console.log('Signup Successful');
      res.status(200).json({
        message: "Signup Successful."
      })
    })
    .catch(err => {
      console.log(err);
    })
}