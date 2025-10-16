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
    <nav>
        {categorias.map((categoria,index)=>(
            <button key={index} onClick={()=>filtroItems(categoria)}>
                {produtos(categoria)}
                {categoria}
            </button>
        ))}
    </nav>
  )
}

export default Categorias