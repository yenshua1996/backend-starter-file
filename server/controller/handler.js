import VueUser from "../model/user.js";
import bcrypt from "bcrypt";

export const getHandler = async (req, res) => {
  try {
    //Grab username and password
    const { userName, passWord } = req.body;

    //Fetch user from db
    const user = await VueUser.findOne({ userName });

    //Compare user password return a boolean value
    const match = await bcrypt.compare(passWord, user.passWord);

    //Check if match
    if (match) {
      res.json({
        message: "Login Complete",
        userData: {
          user: user.userName,
          userFullName: user.fullName,
          userEmail: user.email,
        },
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const postHandler = async (req, res) => {
  try {
    //Salt count
    const saltRounds = 10;

    //User data
    const { fullName, userName, passWord, email } = req.body;

    //Hass password
    const hashPassWord = await bcrypt.hash(passWord, saltRounds);

    //Create new user
    const user = new VueUser({
      fullName,
      userName,
      passWord: hashPassWord,
      email,
    });

    //Save to db
    const newUser = await user.save();

    //Response
    res.json({ user: newUser });
  } catch (err) {
    console.log(err);
  }
};

export const updateHandler = (req, res) => {
  res.send("Update User");
};

export const deleteHandler = (req, res) => {
  res.send("Delete User");
};
