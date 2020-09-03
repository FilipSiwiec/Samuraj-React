const ListItems = (props) => {
    const items = props.items.map(item => <Item 
        key={item.id}
        name={item.name}
        active={item.active}
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