
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cart from './components/Cart.jsx'
import Help from './components/Help.jsx'
import Offer from './components/Offer.jsx'
import Signin from './components/Signin.jsx'
import Body from './components/Body.jsx'
import Signup from './components/Signup.jsx'
import About from './components/About.jsx'


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
        path:"/cart",
        element:<Cart />
    },
    {
        path:"/offer",
        element:<Offer />
    },
    {
        path:"/help",
        element:<Help />
    },
    {
        path:'/signin',
        element:<Signin/>
    },
    {
        path:'/signup',
        element:<Signup/>
    },
    {
        path:'/about',
        element:<About/>
    }
        ]
    },
    
])

createRoot(document.getElementById('root')).render(
  
   <RouterProvider router={appRouter}> </RouterProvider>
  
)
