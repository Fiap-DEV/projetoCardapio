const Categorias = ({categorias,filtroItems}) => {

    const produtos=(categoria)=>{
        switch(categoria.toLowerCase()){
            case "gamer":
                return;
            case "acao":
                return;
            case "aventura":
                return;
            case "rpg":
                return;
            default:
                return null;
        }
    }

  return (
      <nav className="flex justify-center flex-wrap gap-4 mb-12">
      {categorias.map((categoria, index) => (
        <button
          key={index}
          onClick={() => filtroItems(categoria)}
          className="bg-slate-800 text-white border-none rounded-lg px-5 py-3 text-base cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:bg-orange-500 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
        >
          {produtos(categoria)}
          {categoria}
        </button>
      ))}
    </nav>
  )
}

export default Categorias