import { Routes,Route } from 'react-router-dom';
import './App.scss';
import Layout from './Components/Layout'

function App() {
  return (
    <div className="App">
		<Routes>
			<Route path="/" element={<Layout/>} /> 
		</Routes>
    </div>
  );
}

export default App;
