import Navbar from '../../../components/Navbar/Navbar'
import GeneratorNavbar from '../../../components/GeneratorNavbar/GeneratorNavbar'
import DispClasses from '../../../components/DispSelectors/DispSelectors'
import { useSelectors } from './selectorHooks'
import { sizeJson } from '../../../utilities/JsonManager'
import styles from '../Generator.module.scss'

export default function Viewer() {
    const [states, setState] = useSelectors()

    return (
    <>
        <Navbar tab={3} />
        <div className='visual-container'>
            <GeneratorNavbar />
            <div className={styles.scheduleContent}>
                {sizeJson(states) === 0 ?
                <h1 style={{textAlign:'center'}}>No hay bloques para mostrar</h1>
                :
                <DispClasses {...{states, setState}} />}
            </div>
        </div>
    </>)
}