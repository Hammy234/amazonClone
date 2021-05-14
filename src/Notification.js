import React from 'react'
import './Notification.css'
import { useStateValue } from './StateProvider';

function Notification() {
  const [{ notification }, dispatch] = useStateValue();  
  console.log({notification})
  return <>
    {notification && 
      <div className={`notification ${notification.type}`}>
      {notification.message}
    </div>
    }
  </>
}

export default Notification
