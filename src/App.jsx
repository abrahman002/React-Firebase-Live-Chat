import { useEffect, useState } from 'react'
import { getDatabase, onChildAdded, push, ref, set } from "firebase/database";

import './App.css'

function App() {
  const [name, setName] = useState('')
  const [chats, setChats] = useState([]);

  const [msg, setMsg] = useState('')

  const db = getDatabase();
  const chatListref = ref(db, 'chats');

  useEffect(() => {
      onChildAdded(chatListref, (data) => {
      setChats((chats) => [...chats, data.val()]);
    });
  }, []);


  const sendChat = () => {
    const ChatRef = push(chatListref);
    set(ChatRef, {
      name, message: msg
    });
    setMsg('')
  }

  return (
    <div>
      {name ? null : <div className='name'>
        <input  type="text" onBlur={e => setName(e.target.value)} placeholder='Enter name to start' />
      </div>}
      {name ? <div>
        <h1>User: {name}</h1>
        <div className='chat-container'>
          {chats.map(c => <div className={`container ${c.name === name ? 'me' : ''}`} key={c.id}>
            <p className='chatbox'>
              <strong>{c.name}:</strong>
              <span>{c.message}</span>
            </p>
          </div>)
          }
        </div>
        <div className='btm'>
          <input type="text" onInput={e => setMsg(e.target.value)} value={msg} placeholder='enter your message' />
          <button onClick={e => sendChat()}>Send</button>
        </div>
      </div> : null}
    </div>
  )
}

export default App
