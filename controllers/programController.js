const { program } = require("../models");

const index = async (req, res) => {
  try {
    const programs = await program.findAll();

    if (!programs || programs.length === 0) {
      return res.status(200).send({
        message: "Program still empty",
        result: [],
      });
    }

    return res.status(200).send({
      message: "Sucessfully fetched programs.",
      result: programs,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = {
  index,
};
