import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();
const SECRET = process.env.SECRET_KEY || "!5S5G6$1AE@";

const validateJwtToken = (req, res, next) => {
 const token = req.header("Authorization")?.replace("Bearer ","");
 const { email } = req.body;
 try {
    const decodedToken = jwt.verify(token, SECRET)
    if (email !== decodedToken.email) {
        return res.status(401).send("Não autorizado!")
    }
    next();
} catch (err) {
    console.log(req.headers)
    return res.status(401).send("Token inválido!")
}    
}
export default validateJwtToken;