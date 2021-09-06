const User = require('../models/user.model');
const controller = {};

controller.getUsers = async (_req, res) => {
    const users = await User.find({ activo: true });

    res.json(users);
}

controller.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);

    res.json(user);
}

controller.createUser = async (req, res) => {
    const { username, password } = req.body;
    const user = new User({username, password});
    await user.save();

    res.json({msg: 'Se creo el usuario', data:{username,password} });

}

controller.updateUser = async(req, res) => {
    const { username, password, id } = req.body;
    const user = await User.findByIdAndUpdate(id, {username, password}, { new: true });

    res.json({message: 'Se actualizo el usuario', user})
}

controller.deleteUser = async(req, res) => {
    const { id }  = req.body
    const user = await User.findByIdAndUpdate(id, { status: false }, { new: true });

    res.json({msg: 'Se inhabilito el usuario', user});
}

module.exports = controller;