import { startHours, endHours, weekDays, getDay, saveClasses, mapJson } from '../scripts/Utilities';
import { useState } from 'react';

const BlockCreator = () => {
    const [blockClass, setClass] = useState("");
    const [blockGroup, setGroup] = useState("");
    const [blockDay, setDay] = useState(0);
    const [blockStart, setStart] = useState(0);
    const [blockEnd, setEnd] = useState(0);

    function uploadBlock() {
        const course = `${blockClass} [${blockGroup}] (${getDay(blockDay, blockStart, blockEnd)})`;

        if(blockClass.trim().length > 0 && blockGroup.trim().length > 0) {
            if(window.confirm(`¿Seguro que desea guardar este bloque del curso ${course})?`)){
                const block = {
                "Day":blockDay,
                "Start":blockStart,
                "End":blockEnd
                };

                saveClasses(blockClass, blockGroup, block)
                alert("¡Bloque agregado satisfactoriamente!")
            }
        }
    }

    return(
        <div className="blocks-form">
            <div className="blocks-input">
                <div>
                    <label>Clase:</label>
                </div>
                <div>
                    <input type="text" placeholder="Exm: Cálculo" value={blockClass} onChange={evt => setClass(evt.target.value)} list="blocks-list"/>
                    <datalist id="blocks-list">
                    {mapJson(localStorage, (option, index) => {
                        return <option key={index}>{option}</option>
                    })}
                    </datalist>
                </div>
            </div>
            <div className="blocks-input">
                <div>
                    <label>Grupo:</label>
                </div>
                <div>
                    <input type="text" placeholder="Exm: A" value={blockGroup} onChange={evt => setGroup(evt.target.value)} maxLength={1}/>
                </div>
            </div>
            <div className="blocks-input">
                <div>
                    <label>Día de la semana:</label>
                </div>
                <div>
                    <select onChange={evt => setDay(evt.target.value)}>
                    {weekDays.map((wd, index) => {
                        return <option key={index} value={index}>{wd}</option>
                    })}
                    </select>
                </div>
            </div>
            <div className="blocks-input">
                <div>
                    <label>Inicio del bloque:</label>
                </div>
                <div>
                    <select onChange={evt => setStart(evt.target.value)}>
                    {startHours.map((sH, index) => {
                        return <option key={index} value={index}>{sH}</option>
                    })}
                    </select>
                </div>
            </div>
            <div className="blocks-input">
                <div>
                    <label>Final del bloque:</label>
                </div>
                <div>
                    <select onChange={evt => setEnd(evt.target.value)}>
                    {endHours.map((eH, index) => {
                        return <option key={index} value={index}>{eH}</option>
                    })}
                    </select>
                </div>
            </div>
            <button className="blocks-submit" onClick={uploadBlock}>Guardar bloque</button>
        </div>)
}

export default BlockCreator;