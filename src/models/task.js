import {Shema, model, models} from 'mongoose';

const taskShema = new Shema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'La descripcion es obligatoria'],
        trim: true,
    }

}, {
    timestamps: true
})

export default models.Task || model('Task', taskShema);

