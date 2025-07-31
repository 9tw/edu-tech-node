const { user } = require("../models");

const index = async (req, res) => {
  try {
    const users = await user.findAll();

    if (!users || users.length === 0) {
      return res.status(200).send({
        message: "No registered users",
        result: [],
      });
    }

    return res.status(200).send({
      message: "Sucessfully fetched users.",
      result: users,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = {
  index,
};
