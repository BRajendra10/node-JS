import mongoose, { Schema } from 'mongoose';

const studentSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true,
        },
        profileImage: {
            type: String,
            required: true
        }
    },
    { timestams: true }
)

export const Student = mongoose.model("Student", studentSchema)