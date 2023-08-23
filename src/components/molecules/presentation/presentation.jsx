import { useEffect } from 'react'
import Button from '../../atoms/button/button'
import logotipo from '../images/img_logotipo.png'
import './presentations.css'
const presentation = () => {

   useEffect (()=>{
      const animacionInfo = document.getElementById('presentation');
      const animacionLogotipo = document.getElementById('presentation2');

      const cargarAniamcion = (entradas , observador)=>{
        entradas.forEach((entrada)=>{
          if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
          }else{
            entrada.target.classList.remove('visible');
          }
        });
      }

      const observador = new IntersectionObserver(cargarAniamcion,{
        root:null,
        rootMargin:'0px 0px 0px 0px',
        threshold:0.5
      })

      observador.observe(animacionInfo);
      observador.observe(animacionLogotipo);

  }) 

  return (
        <main className="main" id='seccion1'>
          <div className="presentation presentation--right" id='presentation'>
            <div className="presentation__container">
                <div className="presentation__name">
                    <h1 className="presentation__h1">Hi! I am</h1>
                    <h1 className="presentation__h1 presentation__h1--violet">Luis Miguel</h1>
                </div>
                <div className="presentation__description">
                  <p className="presentation__p">
                      I study software development and I am a full stack developer, 
                      I accept any challenge that is assigned to me.
                  </p>
                  <div className="presentation__button">
                    <Button/>
                  </div>
                </div>
            </div>
            
          </div>
          <div className="presentation2 presentation--left" id='presentation2'>
              <div className="presentation2__logotipo">
                  <img src={logotipo} alt="" className="presentation2__logotipo1" />
              </div>
          </div>
        </main>
  )
}

export default presentation