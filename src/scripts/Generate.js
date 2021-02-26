import { getSelectors } from './Utilities';
import { useState } from 'react';

const Generate = () => {
  const [selecting, isSelecting] = useState(true);
  const [states, setStates] = useState(getSelectors())

  function setState(className, groupName, val) {
    const states_ = {...states};
    states_[className][groupName] = val;
    setStates(states_);
  }
  return (
    <>
      <h1>Horarios Generados</h1>
      <div className="schedule-container-selector">
        <div className="schedule-selector">
          <button onClick={() => isSelecting(true)}>Seleccionar Clases</button>
        </div>
        <div className="schedule-selector">
          <button onClick={() => isSelecting(false)}>Ver Horarios</button>
        </div>
      </div>
      <div className="schedule-container-visual">
        {selecting ?
        <>
          {Object.keys(states).map((className, classIndex) => {
            //Creates list of all classes
            return (
              <div key={classIndex} className="schedule-checker">
                <div className="schedule-class">
                  <p>{className}</p>
                </div>
                <div className="schedule-groups">
                  {Object.keys(states[className]).map((groupName, groupIndex) => {
                    //Each class has a list of its groups
                    return (
                      <div key={groupIndex}>
                        <label>{groupName}</label>
                        <input type="checkbox" onChange={evt => setState(className, groupName, evt.target.checked)} checked={states[className][groupName]} />
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </>
        :
        <>
          <p>No hay horarios generados</p>
          <button>Generar Horarios</button>
        </>}
      </div>
    </>
  )
}

export default Generate;