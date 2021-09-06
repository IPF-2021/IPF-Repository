const { model, Schema } = require('mongoose');

const ProfSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        default: true
    }
});


module.exports = model('profesores', ProfSchema);