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

const getByProgram = async (req, res) => {
  try {
    const { id } = req.params;

    const materials = await material.findAll({
      where: {
        program_id: id,
      },
    });

    if (!materials || materials.length === 0) {
      return res.status(200).send({
        message: "Material still empty",
        result: [],
      });
    }

    return res.status(200).send({
      message: "Sucessfully fetched materials.",
      result: materials,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const create = async (req, res) => {
  try {
    const { ...other } = req.body;

    const data = await material.create({ ...other });

    return res.status(200).json({
      success: true,
      message: "Sucessfully created material.",
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

    const data = await material.findByPk(id);
    if (!data) {
      return res.status(404).send({ message: "material not found." });
    }

    const updateData = { ...other };

    await data.update(updateData);

    return res.status(200).json({
      success: true,
      message: "Sucessfully updated material.",
      data: data,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;

    await material.destroy({ where: { id } });

    return res.status(200).send({
      message: "Sucessfully deleted material.",
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
  getByProgram,
};
