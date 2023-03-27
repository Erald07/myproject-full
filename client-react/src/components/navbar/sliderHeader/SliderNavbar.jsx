import React, {useState, useEffect, Component} from "react";
import { Link } from "react-router-dom";
import './Slider.css';

// const texts = ["PER TUTTI I CLIENTI SPEDIZIONE GRATUITA SOPRA AI 35€ 🚚 (ESCLUSI BABYFOOD E PANNOLINI)", "https://www.prenatal.com/vip-card/ SPEDIZIONE E RESO GRATIS PER I CLIENTI VIP 🚚"];

class SliderNavbar extends Component {

  render() {
    return (
      <div className="slider-wrapper bg-cyan-800 flex flex-col justify-center items-center overflow-hidden w-full h-8 text-white mx-auto">
              <div className="slider-text py-1 justify-center text-white mx-auto text-xs place-items-center text-center"><span>ER TUTTI I CLIENTI SPEDIZIONE GRATUITA SOPRA AI 35€ 🚚 (ESCLUSI BABYFOOD E PANNOLINI)</span></div>
              <div className="slider-text py-1 justify-center text-white mx-auto text-xs place-items-center text-center"><Link to={'https://www.prenatal.com/vip-card/'}>SPEDIZIONE E RESO GRATIS PER I CLIENTI VIP 🚚</Link></div>
      </div>
    );
  }
}


export default SliderNavbar;