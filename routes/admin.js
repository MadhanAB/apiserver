
const {login,register} = require("../config/user")

const router = require("express").Router();

router

.post("/login",login)
.post("/register",register)