const jwt = require("jsonwebtoken");
const accessTokenSecret = 'not-a-password';

const authenticateJWT = (req, res, next) => {
    console.log("Req", req.headers)
    const authHeader = req.headers.token;
    console.log("Checking auth")
    console.log(authHeader)
    if (!authHeader) {
        console.log("Not valid token")
        return res.sendStatus(401);
    }
    const token = authHeader
    jwt.verify(token, accessTokenSecret, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    });
};

const authenticateWithClaims = (claims) => (req, res, next) => {
    const authHeader = req.headers.token;
    if (!authHeader) {
        return res.sendStatus(401);
    }
    const token = authHeader;
    jwt.verify(token, accessTokenSecret, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        for (let claim of claims) {
            if (user.claims.includes(claim)) {
                req.user = user;
                return next();
            }
        }
        return res.sendStatus(403);
    });
}

const authenticateMultipleClaims = async (claims, req, res) => {
    console.log("Checking multiple claims")
    const authHeader = req.headers.token;
    console.log(authHeader)
    if (!authHeader) {
        console.log("sending 401")
        res.status= 401;
        return
    }
    const token = authHeader;
    jwt.verify(token, accessTokenSecret, (err, user) => {
        if (err) {        
            console.log("ERROR - sending 403")
            console.log(err)
            res.status= 403;
            return
        }
        console.log(user.claims)
        for (let claim of claims) {
            if (!user.claims.includes(claim)) {
                console.log("claim fail=",claim)
                
                console.log("sending 403")
                res.status= 403;
                return
            }
        }
        console.log("sending 200")
        res.status= 200;
        return
    });
}

const returnClaims = async (req, res) => {
    console.log("Getting multiple claims")
    const authHeader = req.headers.token;
    console.log(authHeader)
    if (!authHeader) {
        console.log("sending 401")
        res.status= 401;
        return
    }
    const token = authHeader;
    jwt.verify(token, accessTokenSecret, (err, user) => {
        if (err) {        
            console.log("ERROR - sending 403")
            console.log(err)
            res.status= 403;
            return
        }
        let claims = {}
        console.log(user.claims)
        for (let claim of user.claims) {
            if(claim === "tenant" || claim === "landlord")
            {
                claims.role = claim
            }
            else
            {
                claims.id = claim
            }
        }
        console.log("sending 200")
        res.status= 200;
        res.user = claims
        return
    });
}

module.exports = { authenticateJWT, authenticateWithClaims, authenticateMultipleClaims, returnClaims };