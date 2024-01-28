import jwt from 'jsonwebtoken'

const generateToken=(id: string,username: string,role: string)=>{
    const token=jwt.sign({id,username,role},process.env.JWT_SECRET as string,{
        expiresIn:'30d',
    });
    return token;
};

export default generateToken;