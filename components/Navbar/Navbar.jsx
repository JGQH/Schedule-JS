import { useState, useEffect } from 'react';
import Router from 'next/router'
import Selector from './Selector'

const selectors = [
    {
        'text':'Tutorial',
        'href':'/'
    },
    {
        'text':'Administrar Bloques',
        'href':'/blocks/create'
    },
    {
        'text':'Visualizar Cursos',
        'href':'/classes'
    },
    {
        'text':'Horarios Generados',
        'href':'/generate/selector'
    }
];

export default function Navbar({ tab = 0 }) {
    const [width, setWidth] = useState(600);

    function goTo(newTab) {
        Router.push(selectors[newTab].href)
    }

    function goBack() {
        if(tab > 0) {
            Router.push(selectors[tab - 1].href)
        }    
    }

    function goNext() {
        if(tab < selectors.length - 1) {
            Router.push(selectors[tab + 1].href)
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
    <div className='selector-container'>
      {(width < 600) ? //Arrows to change tabs
      <>
        <div className='selector-arrow-left' onClick={goBack}></div>
        <Selector text={selectors[tab].text}/>
        <div className='selector-arrow-right' onClick={goNext}></div>
      </>
      : //List of tabs
      selectors.map((selector, index) => {
        return <Selector key={index} text={selector.text} onClick={() => goTo(index)}/>
      })
      }
    </div>)
}