
import './App.scss';
import Header from './components/header/header';
import { Link } from "react-router-dom";


const App = () => {

  return (
    <div className="app-container">
      <Header />
      <div>
        test link
        <div>
          <button>
            <Link to="/users">đi đến trang chủ</Link>
          </button>
          <button>
            <Link to="/admin">đi đến trang quản trị</Link>  
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
