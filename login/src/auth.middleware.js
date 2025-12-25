import { User } from "./user.model.js";
import jwt from 'jsonwebtoken';

export const verifyJWT = async (req, res, next) => {
    try {
        let token = req.cookies?.accessToken;

        if (!token) {
            throw new Error("Authentication required");
        }

        let decoded;
        try {
            decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        } catch {
            throw new Error("Access token expired or invalid");
        }

        const user = await User.findById(decoded._id)
            .select("-password -refreshToken");

        if (!user) {
            throw new Error("User not found");
        }

        req.user = user;
        next();

    } catch (err) {
        console.error(err);

        res.status(401).json({
            success: false,
            message: err.message || "Unwuthorized"
        });
    }
}