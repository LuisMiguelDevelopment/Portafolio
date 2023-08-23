import React ,{useEffect, useState} from 'react'
import logo from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import burger from'../images/burger.png'
import './header.css'
const header = () => {
  const [currentLogo, setCurrentLogo] = useState(logo);
  
  useEffect(() => {
    const menuHamburger = document.querySelector(".navbar__burger");
    const navLinks = document.querySelector(".navbar__links");
  
    if (menuHamburger && navLinks) {
      const burgerMenu = () => {
        navLinks.classList.toggle('navbar__mobile-menu');
      };
  
      menuHamburger.addEventListener('click', burgerMenu);
  
      return () => {
        menuHamburger.removeEventListener('click', burgerMenu);
      };
    }
  }, []);

  
  
    useEffect(() => {
      const animacionInfo = document.getElementById('seccion2');
      const headerElement = document.getElementById('header');

      const cargarAniamcion = (entradas, observador) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {  
            setCurrentLogo(logo2); 
            headerElement.classList.add('colorr');
          } else {
            setCurrentLogo(logo); 
            headerElement.classList.remove('colorr');
          }
        });
      }

      const observador = new IntersectionObserver(cargarAniamcion, {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.5
      });

      observador.observe(animacionInfo);

      return () => {
        observador.disconnect();
      };
    }, []);

  
  return (
    <header className="header">
        <div className="navbar">
            <a href=""><img className='navbar__logo' src={currentLogo} alt="" /></a>
              <div className="navbar__links">
                <ul className="navbar__ul" id='header' >
                  <li className="navbar__li"><a href="#seccion1" className="navbar__a navbar-scrolled">About</a></li>
                  <li className="navbar__li"><a href="#seccion2" className="navbar__a">Services</a></li>
                  <li className="navbar__li"><a href="" className="navbar__a">Projects</a></li>
                  <li className="navbar__li"><a href="" className="navbar__a">Knowledge</a></li>
                  <li className="navbar__li"><a href="" className="navbar__a">Contact me</a> </li>            
                </ul>
              </div>
              <img onClick={useEffect}  className='navbar__burger' src={burger} alt="" />
        </div> 
    </header>
  )
}

export default header