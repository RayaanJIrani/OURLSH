import './App.css';
import {Router} from './utils/routes';
import {BrowserRouter} from 'react-router-dom';



export const App = () =>
    <BrowserRouter>
        <Router />
    </BrowserRouter>

