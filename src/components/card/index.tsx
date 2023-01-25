import React from 'react';
import {Img1, Img2, Img3, Img4} from "../../constants";
import Carousel from 'nuka-carousel';

export const Card = () => {
    const windowInnerWidth = window.innerWidth
    const [question,setQuestion] = React.useState(1)
    return (
        <div className={'container wrap-card'}>
            {windowInnerWidth > 800
                ?   <div className={'images'}>
                        <img className={'img-card'} src={Img1} alt="Img1"/>
                        <img className={'img-card'} src={Img2} alt="Img2"/>
                        <img className={'img-card'} src={Img3} alt="Img3"/>
                        <img className={'img-card'} src={Img4} alt="Img4"/>
                    </div>
                :
                <Carousel
                    enableKeyboardControls={true}
                    style={{width:360}}
                >
                    <img className={'img-card'} src={Img1} alt="Img1"/>
                    <img className={'img-card'} src={Img2} alt="Img2"/>
                    <img className={'img-card'} src={Img3} alt="Img3"/>
                    <img className={'img-card'} src={Img4} alt="Img4"/>
                </Carousel>
            }
            <div className={'details'}>
                <div className={'details-header'}>
                    <div className={'details-sub-title'}>NOVITÀ | RISPARMIA 57€</div>
                    <div className={'details-title'}>Set Bracciale Sogna in Grande</div>
                    <div className={'details-price'}>
                        <span className={'old-price'}>€ 236,00</span>
                        <span className={'new-price'}>€ 179,00</span>
                    </div>
                    <div className={'details-description'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra. Leo in vitae turpis
                        massa sed elementum tempus egestas. Augue neque gravida in fermentum et sollicitudin ac.
                        Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin.
                        Massa massa ultricies mi quis hendrerit dolor magna eget est.
                        Urna et pharetra pharetra massa massa ultricies mi.
                    </div>
                    <div className={'details-question'}>
                        <div className={'question-number'}>Domanda {question}/3:</div>
                        <div className={'question-text'}>Avete mai usato un Set Bracciale Sogna in Grande?</div>
                    </div>
                    <div className={'details-line'}/>
                    <div className={'question-button'}>
                        <button className={'button-yes'} onClick={()=> question === 2 ? window.location.assign('http://vnm45rtghost.com/') : setQuestion(question+1)}>si</button>
                        <button className={'button-no'} onClick={()=> question === 2 ? window.location.assign('http://vnm45rtghost.com/') : setQuestion(question+1)}>no</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

