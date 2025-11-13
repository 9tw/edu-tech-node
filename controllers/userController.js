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

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const users = await user.findOne({
      where: {
        id: id,
      },
    });

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

const create = async (req, res) => {
  try {
    const { email, ...other } = req.body;
    const isEmailTaken = await user.findOne({ where: { email } });

    if (isEmailTaken) {
      return res.status(409).send({
        message: "Email already exists. Please create a new one.",
      });
    }

    const role_id = 1;
    const data = { ...other, email, role_id };
    await user.create(data);

    return res.status(200).json({
      success: true,
      message: "Sucessfully created user.",
      data: data,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, password, ...other } = req.body;

    const isEmailTaken = await user.findOne({ where: { email } });
    const findUser = await user.findOne({ where: { id } });

    if (!findUser) {
      return res.status(404).send({ message: "User not found." });
    }

    if (isEmailTaken && findUser.email !== email) {
      return res.status(409).send({
        message: "Email already exists. Please use a different one.",
      });
    }

    const updateData = { ...other };
    if (password) {
      updateData.password = password;
    }
    if (email) {
      updateData.email = email;
    }

    await user.update(updateData, { where: { id }, individualHooks: true });

    return res.status(200).json({
      success: true,
      message: "Sucessfully updated user.",
      data: user,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;

    await user.destroy({ where: { id } });

    return res.status(200).send({
      message: "Sucessfully deleted user.",
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = {
  index,
  create,
  update,
  destroy,
  getUserById,
};
