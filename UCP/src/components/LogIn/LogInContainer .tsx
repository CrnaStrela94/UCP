import "./logIn.scss"
import logo from "../../../public/logo.svg";

const LogInContainer = () => {
  return (
    <>
      <div className="logInContainer">
        <div className="content">
          <img id="logo" src={logo} alt="logo" />
          <div className="login">
            <input className="LogIn" type="text" placeholder='Username' />
            <input className="LogIn" type="text" placeholder='Password' />
          </div>
          <div className="btnCont">
            <button id='signIn'>Sign in</button>
            <button id='register'>Register</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogInContainer 