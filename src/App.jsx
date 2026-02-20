
import Body from "./components/Body";
import RestorentCard from "./components/RestorentCard";
import Header from "./components/Header"
import { Outlet } from "react-router-dom";
import Footer from './components/Footer'
import appStore from './utils/appStore'
import { Provider } from 'react-redux'

function App(){
    return(
        <Provider store={appStore}> 
            <div>
              <Header />
              <Outlet/>
              <RestorentCard/>
              <Footer />
             
        </div>
         </Provider>
        
    )
}
export default App; 