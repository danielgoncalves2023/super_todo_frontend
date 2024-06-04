import './global.css'
import { BrowserRouter } from 'react-router-dom'
import { MainRoutes } from './Router'
import { Provider } from 'react-redux'
import { store } from './redux'

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
