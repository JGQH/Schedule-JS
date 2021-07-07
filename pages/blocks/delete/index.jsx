import { useState } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import BlockNavbar from '../../../components/BlockNavbar/BlockNavbar'
import { getClasses, deleteClasses } from '../../../utilities/StorageManager'
import { getDay } from '../../../utilities/ScheduleTime'
import { mapJson } from '../../../utilities/JsonManager'

export default function BlockDeleter() {
    const [classes, setClasses] = useState(getClasses())

    function deleteBlock(className, groupName, blockIndex) {
        const block = classes[className][groupName][blockIndex];
        const course = `${className} [${groupName}] (${getDay(block.Day, block.Start, block.End)})`;
        if(window.confirm(`¿Eliminar bloque de ${course}?`)){
            deleteClasses(className, groupName, blockIndex);

            setClasses(getClasses())

            alert('¡Bloque eliminado satisfactoriamente!')
        }
    }

    return (
    <>
        <Navbar tab={1} />
        <div className='visual-container'>
            <BlockNavbar isCreate={false} />
            <div className='blocks-manager'>
                {mapJson(classes, (className, classIndex) => {
                    const currentClass = classes[className]

                    //Loop through all the classes
                    return (
                    <div key={classIndex} className='class-holder'>
                        <h1>{className}</h1>
                        {mapJson(currentClass, (groupName, groupIndex) => {
                            const currentGroup = currentClass[groupName]

                            //Loop through all the groups of each class
                            return (
                            <div key={groupIndex} className='group-holder'>
                                <h3>{groupName}</h3>
                                {currentGroup.map((block, blockIndex) => {

                                    //Loop through all the blocks of each group
                                    return (
                                    <p key={blockIndex} className='block-holder' onClick={() => deleteBlock(className, groupName, blockIndex)}>
                                        {getDay(block.Day, block.Start, block.End)}
                                    </p>)
                                })}
                            </div>)
                        })}
                    </div>)
                })}
            </div>
        </div>
    </>)
}