import { useState } from 'react';
import Selector from './Selector';
import { tutorial } from './scripts/Tutorial';
import { blocks } from './scripts/Blocks';
import { classes } from './scripts/Classes';
import { generate } from './scripts/Generate';

const App = () => {
  const [tab, setTab] = useState(0)
  const selectors = [
    {
      "text":"Tutorial",
      "html": tutorial
    },
    {
      "text":"Crear Bloques",
      "html": blocks
    },
    {
      "text":"Visualizar Cursos",
      "html": classes
    },
    {
      "text":"Horarios Generados",
      "html": generate
    }
  ];
  return (
    <>
    <div className="selector-container">
      {(window.innerWidth < 768) ? //Arrows to change tabs
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
      {selectors[tab].html()}
    </div>
    </>
  );
}

export default App;
