import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();
const SECRET = process.env.SECRET_KEY || "!5S5G6$1AE@";

const createJwtToken = (req, res, next) => {
    
};

export default createJwtToken;