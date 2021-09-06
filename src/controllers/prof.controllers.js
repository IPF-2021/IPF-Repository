const { findByIdAndDelete } = require("../models/moduleprof");

const profesores = require("../models/moduleprof")

const ctrlprofes = {};

//controlador 
ctrlprofes.rutaGet = async(req, res) => {

    const datosProf = await profesores.find({ activo: true })

    res.json(datosProf)

}

//controlador que almacena un nuevo usuario
ctrlprofes.rutaPost = async(req, res) => {
    const { nombre, titulo } = req.body
    const profes = new profesores({ nombre, titulo })
    await profes.save()

    res.json({ msg: "profe cargado correctamente" });
}

ctrlprofes.rutaPut = async(req, res) => {
    const { nombre, titulo, id } = req.body;
    await profesores.findByIdAndUpdate(id, { nombre, titulo }, { new: true });
    res.json({ msg: "datos cambiados correctamente" })

}
ctrlprofes.rutaDelete = async(req, res) => {
    const { id } = req.body;
    await profesores.findByIdAndUpdate(id, { activo: false })
    res.json({
        msg: 'profesor eliminado correctamente'
    })
}




module.exports = ctrlprofes;