import './App.css';
import Mensaje from './Mensaje';

const Descripcion = () => {
    return (
        <p>Esta es la app de fullstack</p>
    )
}

const App = () => {
    return (
        <div className="App">
            <Mensaje color='red' message='Estamos trabajando' ></Mensaje>
            <Mensaje color='blue' message='en un curso de react' />
            <Descripcion></Descripcion>
        </div>
    );
}

export default App;
