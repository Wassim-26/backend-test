import Sandwitche from "../models/sandwitche.js";
export const getSandwitches = async (req, res) => {
  const Sandwitches = await Sandwitche.find();

  res.status(200).send({
    success: true,
    message: "Sandwitches fetched successfully",
    data: Sandwitches,
  });
};

export const getSandwitcheById = async (req, res) => {
  const id = req.params.id;

  const mySandwitche = await Sandwitche.findById(id);

  if (mySandwitche) {
    res.status(200).send({
      success: true,
      message: "Sandwitche fetched successfully",
      data: mySandwitche,
    });
  } else {
    res.status(404).send({
      success: false,
      message: "Sandwitche does not exist",
    });
  }
};

export const createSandwitche = async (req, res) => {
  const sandwitcheInfos = req.body;

  const newSandwitche = await Sandwitche.create(sandwitcheInfos);

  res.status(200).send({
    success: true,
    message: "Sandwitche added successfully",
    data: newSandwitche,
  });
};

export const updateSandwitche = async (req, res) => {
  const id = req.params.id;
  const newInfos = req.body;
  const updatedSandwitche = await Sandwitche.findByIdAndUpdate(id, newInfos, {
    new: true,
  });
  res.status(200).send({
    success: true,
    message: "Sandwitche updated successfully",
    data: updatedSandwitche,
  });
};
export const deleteSandwitche = async (req, res) => {
  const id = req.params.id;
  const deletedSandwitche = await Sandwitche.findByIdAndDelete(id);

  res.status(200).send({
    success: true,
    message: "Sandwitcheremoved successfully",
    data: deletedSandwitche,
  });
};
