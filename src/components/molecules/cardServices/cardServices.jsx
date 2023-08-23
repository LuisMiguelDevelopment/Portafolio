import { useEffect } from 'react';
import './cardServices.css';
import logoDesarrollo from '../images/logo_desarrollo.png'
const cardServices = () => {

  useEffect(()=>{
    const animacion = document.getElementById('card')
    const animacion2 = document.getElementById('titulo')
    const animacion3 = document.getElementById('img')

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

    observador.observe(animacion);
    observador.observe(animacion2);
    observador.observe(animacion3);

  })

  return (

    <div>
        <main className="main mainn" id='seccion2'>
            <div className="card" >
              <div className="card__info" id='card'>
                <img className='card__img' id='img' src={logoDesarrollo} alt="" />
                <h1 className='card__h1'>Full Stack Developer</h1>
                <p className="card__p">
                  As a full-stack developer, I offer services to create complete 
                  web applications using MERN and MEAN technologies.
                </p> 
              </div>
            </div>
            <div className="titulo" id='titulo'>
              <h1 className='titulo__h1'>My</h1>
              <h1 className='titulo__h1 titulo__h1--violet'>Services</h1>
            </div>
  
        </main>
    </div>
  )
}

export default cardServices