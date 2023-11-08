import './App.css';
import NavTopComponent from './components/navTopComponent';

function App() {
  return (
    <div>
      <NavTopComponent links={['Home' , 'DashBoard' , 'Videos' , 'Redes Sociales  ']} />        
    </div>
  );
}

export default App;
