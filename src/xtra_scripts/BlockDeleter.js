import { getDay, getClasses, deleteClasses, mapJson } from '../scripts/Utilities';
import { useState } from 'react';

const BlockDeleter = () => {
    const [classes, setClasses] = useState(getClasses());

    function deleteBlock(className, groupName, index) {
        const block = classes[className][groupName][index];
        const course = `${className} [${groupName}] (${getDay(block.Day, block.Start, block.End)})`;
        if(window.confirm(`¿Eliminar bloque de ${course}?`)){
            deleteClasses(className, groupName, index);

            setClasses(getClasses())

            alert("¡Bloque eliminado satisfactoriamente!")
        }
    }

    return (
    <div className="blocks-manager">
        {mapJson(classes, (className, index1) => {
            return (
                <div key={index1}>
                    <h1>{className}</h1>
                    {mapJson(classes[className], (groupName, index2) => {
                        return (
                        <div key={index2}>
                            <p>{groupName}</p>
                            {classes[className][groupName].map((block, index3) => {
                                return (
                                    <div key={index3}>
                                        {getDay(block.Day, block.Start, block.End)}
                                        <button onClick={() => deleteBlock(className, groupName, index3)}>✖</button>
                                    </div>
                                )
                            })}
                        </div>)
                    })}
                </div>
            )
        })}
    </div>)
}

export default BlockDeleter;