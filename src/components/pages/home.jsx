import {useEffect} from 'react'
import Presentation from "../molecules/presentation/presentation"
import CardServices from "../molecules/cardServices/cardServices"
import ProjectsMe from '../molecules/projectsMe/projectsMe';
import './home.css';

const home = () => {

  return (
    
    <div className="page">
      <Presentation/>
      <CardServices/>
      <ProjectsMe/>
    </div>
  )
}

export default home