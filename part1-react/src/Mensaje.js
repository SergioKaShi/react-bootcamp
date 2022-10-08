const Mensaje = (props) => {
    const { color, message } = props;

    return (
        <h1 style={{ color }}>
            {message}
        </h1>
    )
}

export default Mensaje;