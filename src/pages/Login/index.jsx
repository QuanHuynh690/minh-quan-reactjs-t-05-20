import React from 'react'
import Layout from '../../components/Layout'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Login() {
const [login,setLogin]=useState({
    email :"",
    password:""
})
const inputLogin = event => {
        setLogin({
            ...login,
           [event.target.name]: event.target.value})
        // console.log(event.target.value)
}

const submit = e =>{
  e.preventDefault();
  console.log(login);
  login1(login)
}
const [error,setError]=useState('')
const login1 = async (data) => {
  try {
    const result = await axios({
      method: "POST",
      url: "https://min-shop.herokuapp.com/rest/user/signIn",
      data
    });

    console.log(result.data);
    localStorage.setItem("token", result.data.accessToken)
  } catch (error) {
    console.log(error.response.data.message);
    setError(error.response.data.message);

  }
}
  return (
    <Layout productsInCart={[]}>
      <main>
        {/* breadcrumb-area-start */}
        <section className="breadcrumb-area" style={{backgroundImage: 'url("./assets/page-title.png")'}}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center">
                  <h1>Login</h1>
                  <ul className="breadcrumb-menu">
                    <li><Link to={`/`}>home</Link></li>
                    <li><span>Login</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* login Area Strat*/}
        <section className="login-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="basic-login">
                  <h3 className="text-center mb-60">Login From Here</h3>
                  <form onSubmit={submit}>
                    <p className="text-danger">{error}</p>
                    <label htmlFor="name">Email Address <span>**</span></label>
                    <input name="email" id="name" type="text" placeholder="Enter Username or Email address..." onChange={inputLogin}/>
                    <label htmlFor="pass">Password <span>**</span></label>
                    <input name="password" id="pass" type="password" placeholder="Enter password..." onChange={inputLogin} />
                    <div className="login-action mb-20 fix">
                      <span className="log-rem f-left">
                        <input id="remember" type="checkbox" />
                        <label htmlFor="remember">Remember me!</label>
                      </span>
                      <span className="forgot-login f-right">
                        <a href="#">Lost your password?</a>
                      </span>
                    </div>
                    <button className="btn theme-btn-2 w-100">Login Now</button>
                    <div className="or-divide"><span>or</span></div>
                    <Link to={`/register`} className="btn theme-btn w-100">Register Now</Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* login Area End*/}
      </main>
    </Layout>
  )
}

export default Login