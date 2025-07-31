const { category } = require("../models");

const index = async (req, res) => {
  try {
    const categories = await category.findAll();

    if (!categories || categories.length === 0) {
      return res.status(200).send({
        message: "Category still empty",
        result: [],
      });
    }

    return res.status(200).send({
      message: "Sucessfully fetched categories.",
      result: categories,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = {
  index,
};
