import {Routes, Route} from 'react-router-dom'
import {publicRoutes} from '~/routes'
import {DefaultLayout} from '~/Layout'
import {Fragment} from 'react'
function App() {
  return (
    <div className="App">
        <Routes>
          {publicRoutes.map((route,index)=>{
            let Page =  route.element           
            let Layout = DefaultLayout
            if(route.layout){
              Layout = route.layout
            }
            else if(route.layout === null){
              Layout = Fragment
            }
            return <Route key={index} path={route.path} element={
            <Layout><Page/></Layout>}>             
            </Route>
          })}
        </Routes>
    </div>
  );
}

export default App;
