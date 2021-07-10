import GeneratorNavbar from '@Components/GeneratorNavbar'
import DispClasses from '@Components/DispSelectors'
import { sizeJson } from '@Utilities/JsonManager'
import { useSelectors } from '@Library/selectorHooks'
import styles from '../Generator.module.scss'

export default function Viewer() {
    const [states, setState] = useSelectors()

    return (
    <div className={styles.scheduleContainer}>
        <GeneratorNavbar />
        <div className={styles.scheduleContent}>
            {sizeJson(states) === 0 ?
            <h1 style={{textAlign:'center'}}>No hay bloques para mostrar</h1>
            :
            <DispClasses {...{states, setState}} />}
        </div>
    </div>)
}