const ListItems = (props) => {
    const items = props.items.map(item => <Item
        key={item.id}
        id={item.id}
        name={item.name}
        active={item.active}
        change={props.change}
    />)
    return (
        <>
            <h1>Twoje zamownie:</h1>
            <ul>
                {items}
            </ul>
        </>
    )
}