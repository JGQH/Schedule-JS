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
        {mapJson(classes, (className, classIndex) => (
            <div key={classIndex} className="class-holder">
                <h1>{className}</h1>
                {mapJson(classes[className], (groupName, groupIndex) => (
                    <div key={groupIndex} className="group-holder">
                        <h3>{groupName}</h3>
                        {classes[className][groupName].map((block, blockIndex) => (
                            <p key={blockIndex} className="block-holder" onClick={() => deleteBlock(className, groupName, blockIndex)}>
                                {getDay(block.Day, block.Start, block.End)}
                            </p>)
                        )}
                    </div>)
                )}
            </div>)
        )}
    </div>)
}

export default BlockDeleter;