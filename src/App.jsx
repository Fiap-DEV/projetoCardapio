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
    <div className="min-h-screen bg-gray-100 text-gray-700 font-sans flex flex-col">
      <header className="py-12 bg-white shadow-sm">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-4xl text-slate-800 font-bold uppercase mb-2">
            Cardápio Fiap
          </h1>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>
      </header>

      <main className="flex-grow py-10 px-4">
        <section className="mx-auto max-w-7xl">
          <Categorias categorias={categorias} filtroItems={filtrarItems} />
          <Menu items={menuItems} />
        </section>
      </main>

      <footer className="bg-slate-800 text-white text-center p-5 mt-10">
        <p className="text-sm">&copy; 2025 - Todos os direitos reservados</p>
      </footer>
    </div>
  )
}

export default App
