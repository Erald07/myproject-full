import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactTextTransition, { presets } from "react-text-transition";

const texts = ["PER TUTTI I CLIENTI SPEDIZIONE GRATUITA SOPRA AI 35€ 🚚 (ESCLUSI BABYFOOD E PANNOLINI)", "https://www.prenatal.com/vip-card/ SPEDIZIONE E RESO GRATIS PER I CLIENTI VIP 🚚"];

class SliderNavbar extends Component {
  state = {
    textIndex: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        textIndex: this.state.textIndex + 1,
      });
    }, 5000);
  }

  isValidHttpUrl(string) {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }

  render() {
    return (
      <React.Fragment>   
          <section data-header className="bg-white w-full relative">
              <div className="h-8 flex items-center bg-cyan-800">
                  <div className="container">
                      <ReactTextTransition 
                          children={this.isValidHttpUrl(texts[this.state.textIndex % texts.length]) ? <Link to={'/vip-card'}>{texts[this.state.textIndex % texts.length].split("https://www.prenatal.com/vip-card/")}</Link> : texts[this.state.textIndex % texts.length] } 
                          springConfig={presets.gentle} 
                          className="justify-center text-white mx-auto text-xs place-items-center text-center" 
                          delay={400} 
                        />
                  </div>
              </div>
          </section>
      </React.Fragment>
    );
  }
}

export default SliderNavbar;