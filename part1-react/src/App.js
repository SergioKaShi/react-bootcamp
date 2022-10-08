import './App.css';
import Mensaje from './Mensaje';
import { useState } from 'react';

const Descripcion = () => {
    return (
        <p>Esta es la app de fullstack</p>
    )
}

const Counter = ({ contador }) => {
    return (
        <h1>{contador}</h1>
    )
}

const Button = ({ text, hancleClick }) => {
    return (
        <button onClick={hancleClick}>
            {text}
        </button>
    )
}

const App = () => {
    const [contador, setContador] = useState(0);

    const createHandleClick = (value) => setContador(value);

    const isEven = contador % 2 === 0;
    const evenOddMessage = isEven ? 'Es par' : 'Es impar';

    return (
        <div className="App">
            <Mensaje color='red' message='Estamos trabajando' />
            <Mensaje color='blue' message='en un curso de react' />
            <Descripcion />
            <Counter contador={contador} />
            <p><small>{evenOddMessage}</small></p>
            <Button text='Incrementar' hancleClick={() => createHandleClick(contador + 1)} />
            <Button text='Decrementar' hancleClick={() => createHandleClick(contador - 1)} />
            <Button text='Reset' hancleClick={() => createHandleClick(0)} />
        </div>
    );
}

export default App;
