const { program, category } = require("../models");

const index = async (req, res) => {
  try {
    const programs = await program.findAll({
      include: [
        {
          model: category,
          as: "category",
          required: false,
          attributes: ["id", "title"],
        },
      ],
    });

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

const getByCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const programs = await program.findAll({
      where: {
        category_id: id,
      },
    });

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

const create = async (req, res) => {
  try {
    const { ...other } = req.body;

    const data = await program.create({ ...other });

    return res.status(200).json({
      success: true,
      message: "Sucessfully created program.",
      data: data,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { ...other } = req.body;

    const data = await program.findByPk(id);
    if (!data) {
      return res.status(404).send({ message: "Program not found." });
    }

    const updateData = { ...other };

    await data.update(updateData);

    return res.status(200).json({
      success: true,
      message: "Sucessfully updated program.",
      data: data,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;

    await program.destroy({ where: { id } });

    return res.status(200).send({
      message: "Sucessfully deleted program.",
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
  getByCategory,
};
