import CVFile from './CVFile'
import './Header.scss'
import me from './../../images/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className='container container_header'>
          <h5>Hello I'm</h5>
          <h1>Muhammad Jafar</h1>
          <h5 className='text-light'>Frontend Developer</h5>
           <CVFile/>
		   <HeaderSocials/>
        	<div className="me">
          		<img src={me} alt="me" />
        	</div>
			<a href="#Contact" className='scroll_down'>Scroll Down</a>
        </div>	
    </header>
  )
}

export default Header