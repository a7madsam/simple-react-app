import * as ReactDOMClient from 'react-dom/client';

import './index.css';
import App from './App';

//the root of components tree for newest version of react --> react 18
ReactDOMClient.createRoot(document.getElementById('root')).render(<App />);