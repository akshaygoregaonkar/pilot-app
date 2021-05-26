// import Dashboard,{NextLayer} from './components/dashborad';


// import  ListTemplate from './components/ListTemplate';
// import Practice from './components/Practice'

import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import ParentComp from './components/HOC/ParentComp';
import MyPerent from './components/Dashboard/MyParent'

function App() {
  return (
    <div className="App">
      <h2> my react application</h2>
      {/* <Dashboard />
      <NextLayer/> */}
      {/* <Practice/> */}

      {/* <Header/>
      <Dashboard/>
      <Footer/> */}

      {/* <ParentComp/> */}  
      <MyPerent/>

    </div>
  );
}

export default App;
