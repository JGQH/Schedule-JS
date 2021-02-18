import { useState } from 'react';
import Selector from './Selector';

const App = () => {
  const [tab, setTab] = useState(0)
  const selectors = [
    {
      "text":"Tutorial"
    },
    {
      "text":"Crear bloques"
    },
    {
      "text":"Visualizar cursos"
    },
    {
      "text":"Horarios generados"
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
        return <Selector key={index} text={selector.text}/>
      })
      }
    </div>
    </>
  );
}

export default App;
