const Item = (props) => {

    return (
        <li onClick={() => props.change(props.id)} className={props.active ? "enabled" : "disabled"}>{props.name}</li>
    )
}