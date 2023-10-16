import React, { useState } from 'react';
import './style.css';
import { cliente } from '../../supabase/Cliente';

function Header() {
  const [descricao, setDescricao] = useState("");

  function handleDescricaoChange(e) {
    setDescricao(e.target.value);
  }

  async function addLista() {
    try {
      const { data, error } = await cliente
        .from("tblista")
        .insert({
          lis_descricao: descricao,
        })
        .single();

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <header>
      <div id='criarLista'>
        <input
          type="text"
          className='input'
          placeholder='Adicionar nova lista'
          value={descricao}
          onChange={handleDescricaoChange}
        />
        <button className='btn-enviar' onClick={addLista}>ENVIAR</button>
      </div>
      <div>....</div>
    </header>
  );
}

export default Header;
