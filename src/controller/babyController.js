const Baby = require('../model/babyModel')

exports.listarBaby = async (req, res) => {
    try {
        const baby = await Baby.find({});
        res.status(200).send(baby)
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.crearBaby = async (req, res) => {
    try {
        const nuevoBaby = new Baby(req.body);
        await nuevoBaby.save();
        res.status(201).send(nuevoBaby);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.crearBabiesColectivo = async (req, res) => {
  try {
      const nuevosBabies = await Baby.insertMany(req.body);
      res.status(201).send(nuevosBabies);
  } catch (error) {
      res.status(400).send(error);
  }
};

exports.loginBaby = async (req, res) => {
    const { llaveAcceso } = req.body;
    try {
      const baby = await Baby.findOne({ llaveAcceso: llaveAcceso });
      if (baby) {
        res.status(200).json({ mensaje: "Login exitoso", baby });
      } else {
        res.status(401).json({ mensaje: "Login fallido" });
      }
    } catch (error) {
      res.status(500).json({ mensaje: "Error en el servidor", error });
    }
};