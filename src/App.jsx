import { useState } from "react"
import Menu from "./components/Menu"
import Categorias from "./components/Categorias"
import menuDados from "./data/dados"


// OBTÉM TODAS AS CATEGORIAS DO MENU, ADICIONANDO "TODOS" NO INICIO
const todasCategorias=["todos",...new Set(menuDados.map((item)=>item.categoria))];

function App() {

  // HOOK: useState- manipula o estado da variavel
  const [menuItems, setMenuItems]=useState(menuDados);
  const [categorias]=useState(todasCategorias)

  // função filtrar items

  const filtrarItems =(categoria)=>{
    if(categoria ==="todos"){
      setMenuItems(menuDados); // mostra todos os items
    }else{
      const novoItem = menuDados.filter((item)=>item.categoria ===categoria)
      setMenuItems(novoItem); // mostra apenas o item filtrado
    }
  }
  

  return (
    <div>
      <header>
        <div>
          <h1>Cardápio Loja</h1>
          <div></div>
        </div>
      </header>
      <main>
        <section>
          <Categorias categorias={categorias} filtroItems={filtrarItems}/>
          <Menu items={menuItems}/>
        </section>
      </main>
      <footer>
        <p>&copy;  2025- todos direitos reservados</p>
      </footer>
      
    </div>
  )
}

export default App
