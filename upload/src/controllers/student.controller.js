import mongoose, { isValidObjectId } from 'mongoose';
import { Student } from '../models/student.model.js';

const addStudent = async (req, res) => {
    try {
        const { name, age, email, phone } = req.body;

        if (!name || !email || !age || !phone) {
            throw Error("All fields are required !!");
        }

        const profileImageLocalPath = req.file?.path;

        if (!profileImageLocalPath) {
            throw Error("Profile image is also required !!");
        }

        const newStudent = await Student.create({
            name,
            age,
            email,
            phone,
            profileImage: profileImageLocalPath
        });

        return res.status(201).json({
            status: 201,
            message: "New student added successfully",
            student: newStudent
        });

    } catch (error) {
        console.log("Error while adding new student:", error);

        return res.status(500).json({
            status: 500,
            message: "Something went wrong while adding new student !!",
            error: error.message
        });
    }
};

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find().sort({ createdAt: -1 });

        return res.status(200).json({
            status: 200,
            message: "Students fetched successfully",
            students
        });

    } catch (error) {
        console.log("Error while fetching students:", error);

        return res.status(500).json({
            status: 500,
            message: "Something went wrong while fetching students !!",
            error: error.message
        });
    }
};

const getStudentById = async (req, res) => {
    try {
        const { studentId } = req.params;

        if (!studentId || !isValidObjectId(studentId)) {
            throw Error("Student id is required and should be valid !!");
        }

        const student = await Student.findById(studentId);

        if (!student) {
            return res.status(404).json({
                status: 404,
                message: "Student not found !!"
            });
        }

        return res.status(200).json({
            status: 200,
            message: "Student fetched successfully",
            student
        });

    } catch (error) {
        console.log("Error while fetching student:", error);

        return res.status(500).json({
            status: 500,
            message: "Something went wrong while fetching student !!",
            error: error.message
        });
    }
};


const updateStudent = async (req, res) => {
    try {
        const { studentId } = req.params;
        const { name, age, email, phone } = req.body;

        if (!name || !email || !age || !phone) {
            throw Error("All fields are required !!");
        }

        if (!studentId || !isValidObjectId(studentId)) {
            throw Error("Student id is required and should be valid !!");
        }

        const updateData = { name, age, email, phone };

        // Image optional during update
        if (req.file?.path) {
            updateData.profileImage = req.file.path;
        }

        const updatedStudent = await Student.findByIdAndUpdate(
            studentId,
            updateData,
            { new: true }
        );

        return res.status(200).json({
            status: 200,
            message: "Student data updated successfully",
            student: updatedStudent
        });

    } catch (error) {
        console.log("Error while updating student:", error);

        return res.status(500).json({
            status: 500,
            message: "Something went wrong while updating student data !!",
            error: error.message
        });
    }
};


const deleteStudent = async (req, res) => {
    try {
        const { studentId } = req.params;

        if (!studentId || !isValidObjectId(studentId)) {
            throw Error("Student id is required and should be valid !!");
        }

        await Student.findByIdAndDelete(studentId);
        
        return res.status(200).json({
            status: 200,
            message: "Student deleted successfully",
            student: {deletedStudent}
        });

    } catch (error) {
        console.log("Error while deleting student:", error);

        return res.status(500).json({
            status: 500,
            message: "Something went wrong while deleting student !!",
            error: error.message
        });
    }
};


export {
    addStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};
