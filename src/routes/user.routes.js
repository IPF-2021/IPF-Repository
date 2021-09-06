const router = require('express').Router();
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller');

router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/', createUser);

router.put('/', updateUser);

router.delete('/', deleteUser);

module.exports = router;