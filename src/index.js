import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route} from "react-router-dom";

//Paginas
import PageHome from './pages/PageHome';
import PagePreco from './pages/PagePreco';
import PageServicos from './pages/PageServicos';
import PageSobre from './pages/PageSobre';
import PageContato from './pages/PageContato';
import PageNotFound from './pages/PageNotFound';

//CSS
import './styles/styles.css';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<PageHome/>} exact/>
        <Route path="/sobre" element={<PageSobre/>} />
        <Route path="/servicos" element={<PageServicos/>} />
        <Route path="/preco" element={<PagePreco/>} />
        <Route path="/contato" element={<PageContato/>} />
        <Route element={<PageNotFound/>} />
    </Routes>
  </BrowserRouter>
);