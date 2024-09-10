import { SearchBar } from "../components/SearchBar";

export const Login = () =>{
    return(
        <>
            <SearchBar/>
            <p> Login </p>
            <form className="loginForm">
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <button type="submit"> Login </button>
            </form>
            <div>
                <p> Don't have an account?</p>
                <button> Sign up </button>
            </div>
        </>
    )
}

export const Signup = () =>{
    return(
        <>
            <SearchBar/>
            <p> Sign Up </p>
            <form className="signupForm">
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <input type="password" placeholder="Confirm Password"></input>
                <button type="submit"> Create Account </button>
            </form>
            <div>
                <p> Existing User? </p>
                <button> Login </button>
            </div>
        </>
    )
}