import express from 'express';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser'
import nodemailer from 'nodemailer';
import cors from 'cors';
import bcrypt from 'bcrypt';
import crypto from "crypto";

import { User } from './user.model.js';
import { verifyJWT } from './auth.middleware.js';

const app = express();
const options = { httpOnly: true, secure: false, sameSite: "lax" };

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is running fine"
    })
})

app.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            throw Error("Email and password is required !!")
        }

        const code = crypto.randomInt(100000, 1000000).toString();
        const hashedCode = await bcrypt.hash(code, 10);

        const user = await User.create({
            username,
            email,
            password,
            isEmailVerified: false,
            emailVerificationCode: hashedCode,
            emailVerificationExpires: Date.now() + 10 * 60 * 1000,
        })

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            to: email,
            subject: "Your verification code",
            html: `<h2>${code}</h2><p>Expires in 10 minutes</p>`,
        });

        res.status(201).json({
            success: true,
            message: "Signup successfull. Now please verify your email address"
        })

    } catch (err) {
        console.error(err);

        res.status(400).json({
            success: false,
            message: err.message || "Something went wrong"
        });
    }
})

app.post("/verify-email", async (req, res) => {
    try {
        const { email, code } = req.body;

        const user = await User.findOne({ email });
        if (!user) throw new Error("User not found");

        if (user.emailVerificationExpires < Date.now()) {
            throw new Error("Code expired");
        }

        const isMatch = await bcrypt.compare(code, user.emailVerificationCode);
        if (!isMatch) throw new Error("Invalid code");

        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();
        
        user.isEmailVerified = true;
        user.refreshToken = refreshToken;
        user.emailVerificationCode = undefined;
        user.emailVerificationExpires = undefined;
        await user.save();

        res
            .status(201)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, { ...options, maxAge: 1000 * 60 * 24 * 15 })
            .json({
                success: true,
                message: "Email verification is done | user is logedin now"
            })

    } catch (err) {
        console.error(err);

        res.status(400).json({
            success: false,
            message: err.message || "Something went wrong"
        });
    }
})

app.get("/home", verifyJWT, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to our home page."
    })
})

export { app }