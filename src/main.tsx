import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import { HashRouter } from 'react-router-dom'
import './styles/_index.scss'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import './firebase.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
)