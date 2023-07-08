import React from 'react'
import NavBar from '../Componentts/NavBar'
import AboutIMage from '../images/graphic.png';
import { Card } from 'antd';
import './About.css';
const { Meta } = Card;

const About = () => {
  return (
      <div className='banner__text'>
            <NavBar/>
            <br/>
            <br/>
            <h2 className='aboutstyle'>
            Nurturing passion <br/>
            and dreams
            </h2>
            <p className='para'>
            We are intuite To Code, a unique startup that loves to<br/>
             learn, build and innovate. The future is all about<br/> automation, programming, robots and <br/>computers. It's time to take the right step <br/>forward now.Each student needs practical <br/>knowledge and problem-solving skills to <br/>survive in the future. We form our base <br/>curriculum keeping students as our first and <br/>utmost priority.
            </p>
            <div className="AboutIMage"><img src={AboutIMage} alt="AboutIMage"/></div>
            <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card> 
    </div>
  )
}

export default About
