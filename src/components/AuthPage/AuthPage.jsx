import SignUpForm from "../SignUpForm/SignUpForm"
import LoginForm from "../LoginForm/LoginForm"
import { useState } from "react"

function AuthPage({setUser}) {
    const [switchBtn, setSwitchBtn] = useState("LOG IN")

    function _handleClick() {
        if (switchBtn === "LOG IN") {
            setSwitchBtn("SIGN UP")
        } else {
            setSwitchBtn("LOG IN")
        }
    }

    return (
        <main>
            <h1>AuthPage</h1>
            <button onClick={_handleClick} >{switchBtn}</button>
            {
                switchBtn === "LOG IN" ?
                <SignUpForm setUser={setUser} /> :
                <LoginForm setUser={setUser} />
            }
            
            
        </main>
        
    )
}

export default AuthPage