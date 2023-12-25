import './Login.styles.css';
function Login() {
  return (
    <div className="Login-complete-wrap">
      <h1 className='login-page-title'>Sign In</h1>
      <input type="text" className='textbox'/>
      <input type="password"  className='textbox'/>
      <button className='Login-button'>Sign In</button>
    </div>
  )

}

export default Login;
