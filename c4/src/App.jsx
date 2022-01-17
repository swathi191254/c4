import './App.css';
import {Rout} from 'react-router-dom';
import signIn from './auth/signin'

function App() {
  return (
    <div className="App">
      <Rout path="/signin"auth = {signIn} />
    </div>
  );
}

export default App;
