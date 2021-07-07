import Navbar from '../../../components/Navbar/Navbar'
import BlockNavbar from '../../../components/BlockNavbar/BlockNavbar'
import { useBlock, uploadBlock } from './blockHooks'
import { startHours, endHours, weekDays } from '../../../utilities/ScheduleTime'
import { getClasses } from '../../../utilities/StorageManager'
import { mapJson } from '../../../utilities/JsonManager'

export default function BlockCreator() {
    const [block, setter] = useBlock()

    return (
    <>
        <Navbar tab={1} />
        <div className='visual-container'>
            <BlockNavbar isCreate={true} />
            <div className='blocks-form'>
                <div className='blocks-input'>
                    <div>
                        <label>Clase:</label>
                    </div>
                    <div>
                        <input type='text' placeholder='Exm: Cálculo' onChange={evt => setter('class', evt.target.value)} list='blocks-list'/>
                        <datalist id='blocks-list'>
                        {mapJson(getClasses(), (option, index) => {
                            return <option key={index}>{option}</option>
                        })}
                        </datalist>
                    </div>
                </div>
                <div className='blocks-input'>
                    <div>
                        <label>Grupo:</label>
                    </div>
                    <div>
                        <input type='text' placeholder='Exm: A' onChange={evt => setter('group', evt.target.value)} maxLength={1}/>
                    </div>
                </div>
                <div className='blocks-input'>
                    <div>
                        <label>Día de la semana:</label>
                    </div>
                    <div>
                        <select onChange={evt => setter('day', evt.target.value)}>
                        {weekDays.map((wd, index) => {
                            return <option key={index} value={index}>{wd}</option>
                        })}
                        </select>
                    </div>
                </div>
                <div className='blocks-input'>
                    <div>
                        <label>Inicio del bloque:</label>
                    </div>
                    <div>
                        <select onChange={evt => setter('start', evt.target.value)}>
                        {startHours.map((sH, index) => {
                            return <option key={index} value={index}>{sH}</option>
                        })}
                        </select>
                    </div>
                </div>
                <div className='blocks-input'>
                    <div>
                        <label>Final del bloque:</label>
                    </div>
                    <div>
                        <select onChange={evt => setter('end', evt.target.value)}>
                        {endHours.map((eH, index) => {
                            return <option key={index} value={index}>{eH}</option>
                        })}
                        </select>
                    </div>
                </div>
                <button className='blocks-submit' onClick={() => uploadBlock(block)}>Guardar bloque</button>
            </div>
        </div>
    </>)
}