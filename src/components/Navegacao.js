import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import { cliente } from '../supabase/Cliente';


function Navegacao() {
    const navigate = useNavigate();
    const [user,setUser] = useState();

    useEffect(() => {
        async function getUserData(){
            await cliente.auth.getUser().then((value) => {
                if(value.data?.user){
                    console.log(value.data.user);
                    setUser(value.data.user);
                }
            })
        }
        getUserData();
    }, []);


    const handleLogout = async () => {
        const { error } = await cliente.auth.signOut();
        sessionStorage.removeItem('token');
        navigate("/login");
      };

    return (
    <div className="sidebar">
        <div className="logo-details">
            <i className='bx bxl-c-plus-plus'></i>
            <span className="logo_name">Dashboard</span>
        </div>
        <ul className="nav-links">
            <li>
            <Link to="/dahborad">
                <i className='bx bx-grid-alt'></i>
                <span className="links_name">Nova Lista</span>
            </Link>
            </li>
            <li>
            <Link to="/tarefa">
                <i className='bx bx-box'></i>
                <span className="links_name">Tarefas</span>
            </Link>
            </li>
            <li className="log_out"> 
            <Link to="/">
                <i className='bx bx-log-out'></i>
                <span className="links_name">Log out</span>
            </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navegacao