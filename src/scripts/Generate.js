import SvgSchedule from '../xtra_scripts/SvgSchedule';
import DispClasses from '../xtra_scripts/DispSelectors';
import { generateSchedules } from '../xtra_scripts/GenClasses'
import { getSelectors, getSchedules, saveSchedule, sizeJson } from './Utilities';
import { useState } from 'react';

const Generate = () => {
  const [selecting, isSelecting] = useState(true);
  const [states, setStates] = useState(getSelectors())
  const [schedules, setSchedules] = useState(getSchedules());

  function setState(className, groupName, val) {
    const states_ = {...states};
    states_[className][groupName] = val;
    setStates(states_);
  }

  function createSchedules() {
    const schedules_ = generateSchedules(states);
    saveSchedule(schedules_);
    setSchedules(schedules_);
    alert("¡Horarios generados correctamente!");
  }
  return (
    <>
      <h1>Horarios Generados</h1>
      <div className="schedule-container-selector">
        <div className="schedule-selector">
          <button onClick={() => isSelecting(true)}>Seleccionar Clases</button>
        </div>
        <div className="schedule-selector">
          <button onClick={() => isSelecting(false)}>Visualizar Horarios</button>
        </div>
      </div>
      <div className="schedule-container-visual">
        {selecting ?
          ((sizeJson(states) == 0) ?
            <h1 style={{textAlign:"center"}}>No hay bloques para mostrar</h1>
            :
            <DispClasses states={states} setState={setState} />
          )
        :
        <>
          {(schedules.length == 0) ?
          <h1 style={{textAlign:"center"}}>No hay horarios para mostrar</h1>
          :
          <div className="schedule-visualizer">
            <SvgSchedule schedules={schedules} />
          </div>}
          <button onClick={createSchedules}>Generar Horarios</button>
        </>}
      </div>
    </>
  )
}

export default Generate;