import SvgClass from '@Components/SvgClass'
import { useClass } from '@Library/classHooks'
import styles from './Classes.module.scss'

export default function Classes() {
    const [classesList, groupsList, setter, blocks] = useClass()

    return (
    <div className={styles.classesContainer}>
        {classesList.length === 0 ?
        <h1>No se ha ingresado ninguna clase</h1>
        :
        <>
            <div className={styles.classesNavbar}>
                <div id={styles.cnavTitle}>
                    <h1>Clases</h1>
                </div>
                <div id={styles.cnavClasses} className={styles.classesOption}>
                    <select onChange={evt => setter('name', evt.target.value)}>
                        {classesList.map((name, index) => (
                            <option key={index} value={index}>{name}</option>
                        ))}
                    </select>
                </div>
                <div id={styles.cnavGroups} className={styles.classesOption}>
                    <select onChange={evt => setter('group', evt.target.value)}>
                        {groupsList.map((name, index) => (
                            <option key={index} value={index}>{name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className={styles.classesVisual}>
                <SvgClass blocks={blocks} />
            </div>
        </>}
    </div>)
}