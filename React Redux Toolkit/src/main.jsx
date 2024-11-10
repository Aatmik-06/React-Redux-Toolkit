import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Store1 from './store1.jsx'
// import './App.css'

createRoot(document.getElementById('root')).render(
    <Provider store={Store1}> 
    <App />
    </Provider>
)
