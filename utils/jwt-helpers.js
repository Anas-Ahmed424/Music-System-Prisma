import jwt from 'jsonwebtoken';

function jwtTokens({ name, type, singer, user_id, email, password }) {
    const users = {  name, type, singer, user_id, email, password };
    console.log(process.env.ACCESS_TOKEN_SECRET)
    const accessToken = jwt.sign(users,'543ertyuihghjhgfgbngfghgfgbn',{expiresIn:'50m'});
    const refreshToken = jwt.sign(users,'rtyuiugfdfvbnbvfdfghjffghgfdfgg',{expiresIn:'50m'});
    console.log("access token = ",accessToken)
    console.log("refresh token =",refreshToken)
    return ({accessToken,refreshToken});


}

export {jwtTokens};