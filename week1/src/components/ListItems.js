function ListItems(props){
    const itemsTxt = props.data
        .map((dessert) =>{
            return(
                <li>{dessert.name}- {dessert.desc} = {dessert.price}</li>
            )
        })

    return <ul>{itemsTxt}</ul>
}

export default ListItems;