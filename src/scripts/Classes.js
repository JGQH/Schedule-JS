import { useEffect, useState } from 'react';
import SvgClass from '../svg_scripts/SvgClass'

function getClassesData() {
  let data = {};
  Object.keys(localStorage).forEach(className => {
    data[className] = JSON.parse(localStorage.getItem(className));
  });
  return data;
}

const Classes = () => {
  const classesData = getClassesData()
  const classesNames = Object.keys(classesData);
  const [className, setName] = useState(classesNames[0] || "");
  const [classGroup, setGroup] = useState("");

  function changeGroups(index){
    let groupsNames = Object.keys(classesData[className] || {});
    setGroup(groupsNames[index]);
  }

  useEffect(() => {
    changeGroups(0);
  }, [className])

  function changeName(evt){
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
          <select onChange={evt => changeGroups(evt.target.value)}>
            {(() => {
              let groupsNames = Object.keys(classesData[className]);
              return groupsNames.map((name, index) => {
                return <option key={index} value={index}>{name}</option>
              })
            })()}
          </select>
        </div>
      </div>
      <div className="classes-container-visual">
        <SvgClass blocks={classesData[className][classGroup]} />
      </div>
    </>
  )
}

export default Classes;