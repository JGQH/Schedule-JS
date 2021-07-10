import BlockNavbar from '@Components/BlockNavbar'
import { startHours, endHours, weekDays } from '@Utilities/ScheduleTime'
import { getClasses } from '@Utilities/StorageManager'
import { mapJson } from '@Utilities/JsonManager'
import { useBlock, uploadBlock } from '@Library/blockHooks'
import styles from './Blocks.module.scss'

export default function BlockCreator() {
    const [block, setter] = useBlock()

    function doUpload() {
        uploadBlock(block)
    }

    return (
    <div className={styles.blocksContainer}>
        <BlockNavbar isCreate={true} />
        <div className={styles.blocksForm}>
            <div className={styles.blocksInput}>
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
            <div className={styles.blocksInput}>
                <div>
                    <label>Grupo:</label>
                </div>
                <div>
                    <input type='text' placeholder='Exm: A' onChange={evt => setter('group', evt.target.value)} maxLength={1}/>
                </div>
            </div>
            <div className={styles.blocksInput}>
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
            <div className={styles.blocksInput}>
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
            <div className={styles.blocksInput}>
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
            <button className={styles.blocksSubmit} onClick={doUpload}>Guardar bloque</button>
        </div>
    </div>)
}