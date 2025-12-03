import { Router } from 'express';
import {
    addStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} from '../controllers/student.controller.js';
import { upload } from '../middleware/multer.middleware.js';

const router = Router();

router.post("/add", upload.single("profileImage"), addStudent);
router.get("/all", getAllStudents);
router.get("/:studentId", getStudentById);
router.put("/update/:studentId", upload.single("profileImage"), updateStudent);
router.delete("/delete/:studentId", deleteStudent);

export default router;
