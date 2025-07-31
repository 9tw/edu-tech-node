const { material } = require("../models");

const index = async (req, res) => {
  try {
    const materials = await material.findAll();

    if (!materials || materials.length === 0) {
      return res.status(200).send({
        message: "Material still empty",
        result: [],
      });
    }

    return res.status(200).send({
      message: "Sucessfully fetched material.",
      result: materials,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = {
  index,
};
