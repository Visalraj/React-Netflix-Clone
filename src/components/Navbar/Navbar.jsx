import './Navbar.styles.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
        <Link to='/'><img src="/assets/images/Netflix_2015_logo.svg.png" alt="Netflix" className="logo"/></Link>
		<Link to='/login'><img src="/assets/images/avatar.png" alt="Avatar" className="avatar"/></Link>

    </div>
  )
}

export default Navbar