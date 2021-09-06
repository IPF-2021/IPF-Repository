import User, { find, findById, findByIdAndUpdate } from '../models/User';
const controller = {};

controller.getUsers = async (_req, res) => {
    const users = await find({ activo: true });

    res.json(users);
}

controller.getUser = async (req, res) => {
    const user = await findById(req.params.id);

    res.json(user);
}

controller.createUser = async (req, res) => {
    const { username, password } = req.body;
    const user = new User({username, password});
    await user.save();

    res.json({msg: 'Se creo el usuario'});

}

controller.updateUser = async(req, res) => {
    const { username, password, id } = req.body;
    const user = await findByIdAndUpdate(id, {username, password}, { new: true });

    res.json({message: 'Se actualizo el usuario', user})
}

controller.deleteUser = async(req, res) => {
    const { id }  = req.body
    const user = await findByIdAndUpdate(id, { activo: false }, { new: true });

    res.json({msg: 'Se inhabilito el usuario', user});
}

module.exports = controller;