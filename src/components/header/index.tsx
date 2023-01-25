import React from 'react';
import {Basket, Burger, Location, Logo, User} from "../../constants";

export const Header = () => {
    const windowInnerWidth = window.innerWidth

    return (
        windowInnerWidth > 800 ?
             <header className={'container header'}>
                 <div className={"logo"}>
                     <img src={Logo} alt="Logo"/>
                 </div>
                 <div className={"action"}>
                    <div className={'search-bar'}>
                        <i className={'icon'}></i>
                        <input className={'input'} type="text" placeholder={'cerca ...'}/>
                    </div>
                     <div className={'action-bar'}>
                         <img className={'img-action'} src={Location} alt="Location"/>
                         <img className={'img-action'} src={User} alt="User"/>
                         <img className={'img-action'} src={Basket} alt="Basket"/>
                     </div>
                 </div>
             </header>
            : <header className={'container header'}>
                <div className={'action-bar'}>
                    <img className={'burger'} src={Burger} alt={'Burger'}/>
                    <img className={'img-action'} src={User} alt="User"/>
                </div>
                <div className={"logo"}>
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className={'action-bar'}>
                    <img className={'img-action'} src={Location} alt="Location"/>
                    <img className={'img-action'} src={Basket} alt="Basket"/>
                </div>
            </header>
    );
}

