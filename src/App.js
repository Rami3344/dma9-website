import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import About from './components/Main/About';
import Suggest from './components/Main/Suggest';
import Join from './components/Main/Join';
import Footer from './components/Footer/Footer';
import LoginPop from './components/PopUps/LoginPop';
import RegisterPop from './components/PopUps/RegisterPop';

function App() {
  const [isOpenLog , setIsOpenLog] = useState(false)
  const [isOpenReg , setIsOpenReg] = useState(false)
  const handleOpenLog= () =>{
    setIsOpenLog(!isOpenLog);
    console.log(isOpenLog)
  }
  const handleOpenReg= () =>{
    setIsOpenReg(!isOpenReg);
    console.log(isOpenReg)
  }
  return (
    <div className={`${isOpenLog||isOpenReg ? "blur" : ""}  App `}>
      <nav>
      <NavBar handleOpenLog={handleOpenLog} handleOpenReg={handleOpenReg}/>
      <LoginPop isOpenLog={isOpenLog} setIsOpenLog={setIsOpenLog}/>
      <RegisterPop isOpenReg={isOpenReg} setIsOpenReg={setIsOpenReg} />
      </nav>
      <main>
        <About/>
        <Suggest/>
        <Join/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
