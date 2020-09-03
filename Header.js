const Header = (props) => {
    const items = props.items.filter(item => item.active).length
    return (
        <div>
            <h2>Wielkosc zamownienia to: {items}</h2>
            <h2>Do zaplaty: {items ? `${items * 10}` : `nic nie wybrales`}</h2>
        </div>
    )
}