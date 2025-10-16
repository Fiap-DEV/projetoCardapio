import MenuItem from "./MenuItem"

const Menu = ({items}) => {
  return (
    <div>
        {items.map((item)=>(
            <MenuItem key={item} {...item}/>
        ))}
    </div>
  )
}

export default Menu