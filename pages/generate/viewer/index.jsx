import Navbar from '../../../components/Navbar/Navbar'
import GeneratorNavbar from '../../../components/GeneratorNavbar/GeneratorNavbar'
import SvgSchedule from '../../../components/Svgs/SvgSchedule'
import { useSchedules } from './viewerHooks'

export default function Selector() {
    const [schedules, doSchedules] = useSchedules()

    return (
    <>
        <Navbar tab={3} />
        <div className='visual-container'>
            <GeneratorNavbar />
            <div className='schedule-container-visual'>
                {schedules.length === 0 ?
                <h1 style={{textAlign:'center'}}>No hay horarios para mostrar</h1>
                :
                <div className='schedule-visualizer'>
                    <SvgSchedule schedules={schedules} />
                </div>}
                <button onClick={doSchedules}>Generar Horarios</button>
            </div>
        </div>
    </>)
}