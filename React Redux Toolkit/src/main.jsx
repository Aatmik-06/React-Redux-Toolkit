import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
// import Store1 from './store1.jsx'
// import store from './Store.jsx';
import store2 from './store2.jsx';
// import './App.css'

createRoot(document.getElementById('root')).render(
    // <Provider store={store}>  
    // <Provider store={Store1}> 
    <Provider store={store2}>  
     
    <App />
    </Provider>
)
