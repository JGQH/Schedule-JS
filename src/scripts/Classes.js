import { useState } from 'react';

const Classes = ({width}) => {
  const classesNames = Object.keys(localStorage) || [];
  const [className, setName] = useState(classesNames[0]);
  const [classGroup, setGroup] = useState(0);

  function changeName(evt){
    setGroup(0);

    const index = evt.target.value;
    setName(classesNames[index]);
  }
  return (
    (classesNames.length == 0) ?
    <h1>No se ha ingresado ninguna clase</h1>
    :
    <>
      <h1>Clases</h1>
      <div className="classes-container-selector">
        <div className="classes-selector">
          <select onChange={changeName}>
            {classesNames.map((name, index) => {
              return <option key={index} value={index}>{name}</option>
            })}
          </select>
        </div>
        <div className="classes-selector">
          <select onChange={evt => setGroup(evt.target.value)}>
            {(() => {
              let groups = JSON.parse(localStorage.getItem(className));
              let groupsNames = Object.keys(groups);
              return groupsNames.map((name, index) => {
                return <option key={index} value={index}>{name}</option>
              })
            })()}
          </select>
        </div>
      </div>
      <div className="classes-container-visual">
        {(width >= 600) ? 
        <>
          <div className="classes-arrow"></div>
          <div className="classes-holder">
            <svg width="400" height="400"></svg>
          </div>
          <div className="classes-arrow"></div>
        </>
        :
        <>
          <div className="classes-holder">
            <svg width="400" height="400"></svg>
          </div>
          <div style={{width:"100%", textAlign:"center"}}>
            <div className="classes-arrow"></div>
            <div className="classes-arrow"></div>
          </div>
        </>}
      </div>
    </>
  )
}

export default Classes;