import { useState, useEffect } from 'react';
import Router from 'next/router'
import Selector from './Selector'
import NavbarOptions from './NavbarOptions'
import styles from './Navbar.module.scss'

export default function Navbar({ tab = 0 }) {
    const [width, setWidth] = useState(600);

    function goTo(newTab) {
        Router.push(NavbarOptions[newTab].href)
    }

    function goBack() {
        if(tab > 0) {
            Router.push(NavbarOptions[tab - 1].href)
        }    
    }

    function goNext() {
        if(tab < NavbarOptions.length - 1) {
            Router.push(NavbarOptions[tab + 1].href)
        }
    }

    useEffect(() => {
        function doResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', doResize);

        return () => window.removeEventListener('resize', doResize);
    }, []);

    return (
    <div className={styles.navbarContainer}>
      {(width < 600) ? //Arrows to change tabs
      <>
        <div className={styles.navArrowLeft} onClick={goBack}></div>
        <Selector text={NavbarOptions[tab].text}/>
        <div className={styles.navArrowRight} onClick={goNext}></div>
      </>
      : //List of tabs
      NavbarOptions.map((option, index) => {
        return <Selector key={index} text={option.text} onClick={() => goTo(index)}/>
      })
      }
    </div>)
}