import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Userpage from './pages/userpage';
import UsersList from './components/UsersList';

function App() {

  let isLogged = false
  if (sessionStorage.getItem("JWT")) {
   isLogged = true
  }


  
  return (

    <div className="App">
      <ul className='navbar'>
        ROUTER
        <li id='Home Page'><Link to='/'> Home Page </Link></li>
        <li id='signup'><Link to='/signup'> Signup </Link></li>
        <li id='signin'><Link to='/signin'> Signin </Link></li>
      </ul>

      <div className='navpageHolder'>
      <Routes>
         <Route path = '/' element = {<globalThis/>} />
         <Route path = '/signup' element = {!isLogged ? <Signup/> : null} />
         <Route path = '/Signin' element = {!isLogged ? <Signin/> : null} />
      </Routes>
      </div>

      <div className='userPageHolder'>
        {isLogged == true ? <Userpage/> : null} 
      </div>

      <div className='users_list'>
        {isLogged == true ? <UsersList/> : null}
      </div>

    </div>
  );
}

export default App;
