import { Routes,Route} from "react-router-dom";
import Tarefa from "./page/tarefa";
import NovaLista from "./page/Lista";
import Login from "./page/Login";

function App() {
  return (
    <div className="App">
        <>
           <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<NovaLista/>} />
            <Route path="/dashboard/Tarefa" element={<Tarefa/>} />
          </Routes> 
        </>

    </div>
  );
}

export default App;
