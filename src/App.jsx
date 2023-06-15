import { useState } from 'react'
import './App.css'
import Modal from './components/modal'

function App() {
  const [flg, setFlg] = useState(false);
  
  

  return (
    <>
      <h1>zz</h1>
      <>
      { flg  ?
        <Modal flg={flg} setFlg = {setFlg} />
      :
      <button onClick={()=>{setFlg(!flg)}}>모달창 열기</button>
      }
      </>
      
    </>
  )
}

export default App
