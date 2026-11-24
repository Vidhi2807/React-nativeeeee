import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './redux/slice';


const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.users)



  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");


  const handlesubmit = (e) => {
    e.preventDefault()

    dispatch(addUser({ name, email, password }));
    setName(" ")
    setEmail(" ")
    setPassword(" ")


  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type='text' placeholder='enter name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='email' placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Submit</button>

      </form>
      {user.map((user,index)=>(
        <div key ={index}>
          <p>NAME : {user.name}</p>
          <p>EMAIL : {user.email}</p>
          <p>PASSWPRD : g{user.password}</p>
                </div>

      )
      )}

    </div>

  )
}




export default App