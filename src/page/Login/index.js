import React, { useState, useEffect } from 'react';
import './style.css';
import { cliente } from '../../supabase/Cliente';
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa} from '@supabase/auth-ui-shared'
import { useNavigate } from 'react-router-dom';
import './'
function Login() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const navigate = useNavigate();

  // cliente.auth.onAuthStateChange(async (event) => { 
  //   console.log(event)
  //   if(event !== "SIGNED_OUT"){
  //     navigate("/dashboard");
  //   }
  // })

  // cliente.auth.signIn({
  //   email: 'hello@example',
  //   password: 'pass',
  // })


  return (
    <>
      <div id="bannerLogin">..</div>
      <form id='formLogin'>
        <h1 className='text-3xl font-bold'>Faça login online!</h1>
        form



        
          {/* <Auth
          supabaseClient={cliente}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={['google']}
        /> */}
      </form>
  
    </>
  );
}

export default Login;
