import React from "react";
import useLocalStorage from "use-local-storage";
import "./index.css";


function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }


  return (
   <>
     <div className="app" data-theme={theme}>
        <div className="login">
          <h1>Login</h1>
          <div className="container">
            <div className="top">
              <i class="fab fa-google"></i>
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-linkedin"></i>
              <i class="fab fa-twitter-square"></i>
              <i class="fab fa-apple"></i>
            </div>
              <p className="divider">
                <span>OR</span>
              </p>
                <form>
                  <label>Email</label>
                  <input type="e-mail"></input>
                  <label>Password</label>
                  <input type="password"></input>
                  <div className="remember">
                    <input type="checkbox" checked="checked" />
                      <p className="remember_text">Remember Me</p>
                  </div>
                  <button className="button">Log In</button>
                </form>
                  <div className="bottom">
                    <p>Forgot your password?</p>
                    <a href="/">Reset Password</a>
                  </div>
                  <div className="create">Create an account</div>
                  <div className="theme-toggle">
                    <h2>Light Theme</h2>
                    <i class="fas fa-toggle-on" onClick={switchTheme}></i>

                  </div>

          </div>
        </div>
     </div> 
   </>
  );
}

export default App;
