import { useState, useEffect } from 'react';
import Selector from './Selector';
import Tutorial from './scripts/Tutorial';
import Blocks from './scripts/Blocks';
import Classes from './scripts/Classes';
import Generate from './scripts/Generate';

const App = () => {
  const [tab, setTab] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  const selectors = [
    {
      "text":"Tutorial",
      "html": <Tutorial />
    },
    {
      "text":"Administrar Bloques",
      "html": <Blocks />
    },
    {
      "text":"Visualizar Cursos",
      "html": <Classes />
    },
    {
      "text":"Horarios Generados",
      "html": <Generate />
    }
  ];

  useEffect(() => {
    function doResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', doResize);

    return () => window.removeEventListener('resize', doResize);
  }, []);
  return (
    <>
    <div className="selector-container">
      {(width < 600) ? //Arrows to change tabs
      <>
        <div className="selector-arrow-left" onClick={() => (tab > 0) && setTab(tab - 1)}></div>
        <Selector text={selectors[tab].text}/>
        <div className="selector-arrow-right" onClick={() => (tab < (selectors.length - 1)) && setTab(tab + 1)}></div>
      </>
      : //List of tabs
      selectors.map((selector, index) => {
        return <Selector key={index} text={selector.text} onClick={() => setTab(index)}/>
      })
      }
    </div>
    <div className="visual-container">
      {selectors[tab].html}
    </div>
    </>
  );
}

export default App;
