import logo from './logo.svg';
import './Stile_Css/App.css';
import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
