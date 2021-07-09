import GeneratorNavbar from '@Components/GeneratorNavbar'
import SvgSchedule from '@Components/SvgSchedule'
import { useSchedules } from './viewerHooks'
import styles from '../Generator.module.scss'

export default function Selector() {
    const [schedules, doSchedules] = useSchedules()

    return (
    <div className={styles.scheduleContainer}>
        <GeneratorNavbar />
        <div className={styles.scheduleContent}>
            {schedules.length === 0 ?
            <h1 style={{textAlign:'center'}}>No hay horarios para mostrar</h1>
            :
            <SvgSchedule schedules={schedules} />}
            <button onClick={doSchedules}>Generar Horarios</button>
        </div>
    </div>)
}