import './projectsMe.css'
import gitlogo from '../images/github-logo.png'
import { useEffect } from 'react'

const projectsMe = () => {

  useEffect(()=>{
    const animacionArriba = document.getElementById('arriba1')
    const animacionTitulo = document.getElementById('titulo2')
    const animacionAbajo = document.getElementById('abajo')
    const animacionArriba2 = document.getElementById('arriba2')

    const Animacion = (entradas , observador)=>{
        entradas.forEach((entrada)=>{
          if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
          }else{
            entrada.target.classList.remove('visible')
          }
        });
    }

    const observador = new IntersectionObserver(Animacion,{
      root:null,
      rootMargin:'0px 0px 0px 0px',
      threshold:0.5
    })

    observador.observe(animacionArriba);
    observador.observe(animacionAbajo);
    observador.observe(animacionArriba2);
    observador.observe(animacionTitulo);

  })

  return (
    <div className='projectsMe'>  
      <h1 id='titulo2' className="projectsMe__h1">Proj<span className='projectsMe__h1--span'>ects</span></h1>
      <div className="images">
        <a href="https://github.com/" className="images__img images__img--1" id='arriba1'>
          <img className='images__logo ' src={gitlogo} alt=""/>
          <p className='images__a' href="">github</p>
        </a>
        <a href="https://github.com/" className="images__img images__img--2" id='abajo'>
          <img className='images__logo' src={gitlogo} alt=""/>
          <p className='images__a' href="">github</p>
        </a>
        <a href="https://github.com/" className="images__img images__img--3" id='arriba2'>
          <img className='images__logo' src={gitlogo} alt=""/>
          <p className='images__a' href="">github</p>
        </a>
        </div>  
    </div>
  )
}

export default projectsMe