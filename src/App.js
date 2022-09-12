import './App.css'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Experience from './Components/Experience/Experience'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'
import History from './Components/History/History'
import Portfolio from './Components/Portfolio/Portfolio'

const App = () => {
  return (
    <div>
      	<Header/>
		<Nav/>
		<About/>
		<Experience/>
		<Portfolio/>
		<History/>
		<Contact/>
		<Footer/>		
    </div>
  )
}

export default App