import React, { useState } from "react";
// import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../Redux/apicalls";
import {Link} from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import GoogleIcon from '@mui/icons-material/Google';
// import FacebookIcon from '@mui/icons-material/Facebook';
import { useNavigate } from "react-router-dom";
import "../App.css";

const box = {
    margin: "30px 36% 30px 37%",
    borderRadius: "5px",
    height: "auto",
    width: "26%",
    backgroundColor: "white",
    paddingBottom: "30px",
};
const inputBox = {
    margin: "10px 30px",
    border: "1px solid grey",
    height: "35px",
    width: "85%",
    padding: "10px",
};
const btn = {
    margin: "18px 0px 0px 0px",
    height: "40px",
    width: "85%",
    border: "1px solid rgb(2,123,80)",
    backgroundColor: "rgb(2,123,80)",
    color: "white",
    fontSize: "20px",
};
const fb = {
    margin: "0px 0px 10px 0px",
    height: "40px",
    width: "85%",
    border: "1px solid rgb(57,87,154)",
    backgroundColor: "rgb(57,87,154)",
    color: "white",
    fontSize: "17px",
};

const apple = {
    margin: "15px 30px",
    height: "40px",
    width: "85%",
    border: "1px solid red",
    backgroundColor: "red",
    borderRadius: "5px",
    color: "white",
    fontSize: "20px",
};


export const Login = ({handleuser}) =>
{
    const navigate = useNavigate();
    console.log(handleuser)
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const dispatch = useDispatch();
    
    const handleClick = (e) =>

    {
        navigate("/")
        e.preventDefault();
        let user = {
            user: username,
            isFetching: false,
            error:false

        }
        console.log(user)
        login(dispatch, { username, password }, handleuser)
    }
    
    // const [user, setUser] = useState({
    //     email: "",
    //     password: ""
    // })

    // const handleChange = e =>
    // {
    //     const { name, value } = e.target
    //     setUser({
    //         ...user,
    //         [name]: value
    //     })
    // }
    //   const login = () => {
    //     axios.post("http://localhost:9002/login", user)
    //     .then(res => {
    //         alert(res.data.message)
    //         setLoginUser(res.data.user)
    //         history.push("/")
    //     })
    // }
    return (
        <div className="App" >
        <div style={{
            height: "auto",
            width: "130%",
            backgroundColor: "#f5efff",
            padding: "30px 0px",
            marginLeft:"-130px"
        }}>
            <div style={box}>
                <h1 style={{
                    textAlign: "left",
                    marginLeft: "30px",
                    paddingTop: "20px",
                    fontWeight: 400,
                    fontSize: "30px"
                }}>Log in
                </h1>
                <input
                    style={inputBox}
                    type="text"
                    // value={user.email}
                    name=""
                    placeholder="User name"
                    onChange={(e)=>setusername(e.target.value)}
                />
                <br />
                <input
                    style={inputBox}
                    type="password"
                    // value={user.password}
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setpassword(e.target.value)}
                    
                />
                <br />
                <a
                    style={{
                        textDecoration: "none",
                        marginLeft: "30px",
                        fontSize: "13px",


                    }}
                    href="google.com"
                >
                    Forget your password?
                </a>
                <button style={btn}
                    //  onClick={login}
                    onClick={handleClick }
                >
                    Log in
                </button>
                <div style={{ textAlign: "center" }}>
                    {" "}
                    {"error" && <h5>""</h5>}{" "}
                </div>
                <p style={{ textAlign: "center" }}>or</p>
                <button style={apple} >
                    {/* <GoogleIcon /> */}
                    Sign in with Google
                </button>
                <button style={fb}>
                    {/* <FacebookIcon /> */}
                    Continue with Facebook
                </button>
                <p
                    style={{
                        margin: "0px 30px",
                        fontSize: "13px",
                        textAlign: "left",
                        textEmphasis: "GrayText",
                    }}
                >
                    Get notified when your friends back and launch projects. We'll never
                    post anything on Facebook without your permission.
                </p>
                <a
                    style={{
                        textDecoration: "none",
                        marginLeft: "30px",
                        fontSize: "16px",
                    }}
                    href="google.com"
                >
                    Read more
                </a>
                <p style={{ textAlign: "center", marginTop: "25px" }}>
                    New to Kickstarter?{" "}
                    <Link to="/signup" style={{ textDecoration: "none" }} href="google"
                    // onClick={() => history.push("/register")}
                    >
                        Sign up
                    </Link>
                </p>
                <p
                    style={{
                        margin: "20px 15px 0px 20px",
                        fontSize: "13px",
                        color: "Gray",
                    }}
                >
                    This site is protected by reCAPTCHA and the Google{" "}
                    <a style={{ textDecoration: "none" }} href="google">
                        Privacy
                    </a>{" "}
                    <a style={{ textDecoration: "none" }} href="google">
                        Policy
                    </a>{" "}
                    and{" "}
                    <a style={{ textDecoration: "none" }} href="google">
                        Terms of Service
                    </a>{" "}
                    apply.
                </p>
            </div>


        </div>
        </div>
    );

}