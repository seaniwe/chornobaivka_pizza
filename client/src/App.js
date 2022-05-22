import "./App.scss";
import { Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Home/>
            </div>
        </div>
    );
}

export default App;
