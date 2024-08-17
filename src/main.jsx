import { createRoot } from 'react-dom/client'

// CSS Files :
import './App.css'
import './css/normalize.css'


import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { allRed } from './store/reducers';

import { router } from './router';

let store = createStore(allRed);

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
)
