import React, { useState, useEffect } from 'react';
import '../../index.css';
import './style.css';

import Navegacao from '../../components/Navegacao';
import Header from '../../components/Header';
import Relogio from '../../components/Relogio';
import { cliente } from '../../supabase/Cliente';

function NovaLista() {
  const [dataFetched, setDataFetched] = useState(false);
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await cliente.from('tblista').select();
        if (error) {
          console.error('Erro ao buscar os dados:', error);
        } else {
          setLista(data);
          setDataFetched(true);
        }
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    if (!dataFetched) {
      fetchData();
    }
  }, [dataFetched]);

  return (
    <>
      <Navegacao />
      <main>
        <Relogio />
        <div className="container" id="listas">
          <table>
            <tbody>
              {lista.map((item) => (
                <tr key={item.lis_codigo}>
                  <td>{item.lis_descricao}</td>
                  <td>
                    <button className='btn-verificar' onClick={() => handleVerLista(item)}>Ver Lista</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Header />
      </main>
    </>
  );
}

function handleVerLista(item) {
  // Implemente a lógica para ver a lista
  console.log('Ver Lista:', item);
}

function handleDeletarLista(lisCodigo) {
  // Implemente a lógica para deletar a lista com o código lisCodigo
  console.log('Deletar Lista:', lisCodigo);
}

export default NovaLista;
