import Navbar from '@Components/Navbar'
import SvgClass from '@Components/SvgClass'
import { useClass } from './classHooks'
import styles from './Classes.module.scss'

export default function Classes() {
    const [classesList, groupsList, setter, blocks] = useClass()

    return (
    <>
        <Navbar tab={2} />
        <div className='visual-container'>
            {classesList.length === 0 ?
            <h1 style={{textAlign:'center'}}>No se ha ingresado ninguna clase</h1>
            :
            <>
                <h1>Clases</h1>
                <div className={styles.classesContainerNavbar}>
                    <div className={styles.classesNavigator}>
                        <select onChange={evt => setter('name', evt.target.value)}>
                            {classesList.map((name, index) => (
                                <option key={index} value={index}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.classesNavigator}>
                        <select onChange={evt => setter('group', evt.target.value)}>
                            {groupsList.map((name, index) => (
                                <option key={index} value={index}>{name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={styles.classesContainerVisual}>
                    <SvgClass blocks={blocks} />
                </div>
            </>}
        </div>
    </>)
}