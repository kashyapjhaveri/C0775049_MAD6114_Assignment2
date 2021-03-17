import React,{ useRef, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FormData from './FormData'

function LoginForm(props) {
  const nameEl = useRef(null);
  const passwordEl = useRef(null);
  const rememberMeEl = useRef(null);
  const [formSubmmited, setFormSubmitted] = useState(false)

  const resetFormHandler = () => {
   setFormSubmitted(false)
  }

  const handleSubmit = e => {
    e.preventDefault();
    setFormSubmitted(true)
  };

  if(formSubmmited){
    return(
      <FormData username={nameEl.current.value} password={passwordEl.current.value} rememberMe={rememberMeEl.current.checked} onFormReset={resetFormHandler} />
    )
  }

  return (
     <form onSubmit={handleSubmit}>
       <p>User Name: <input type="text" placeholder="username" ref={nameEl} /></p>
       <p>Password: <input type="password" placeholder="password" ref={passwordEl}/></p>
       <label>
         <input type="checkbox" ref={rememberMeEl} />
         Remember me
       </label>
       <p><button type="submit" className="myButton">Login</button></p>
     </form>
   );
}

ReactDOM.render(<div><LoginForm /></div>, document.getElementById("root"));