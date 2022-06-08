import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ShopCartProvider } from './contexts/ShopCartProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ShopCartProvider>
        <App />
    </ShopCartProvider>
);