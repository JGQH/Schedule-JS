import Router from 'next/router'
import styles from './GeneratorNavbar.module.scss'

export default function GeneratorNavbar() {
    function goSelect() {
        Router.push('/generate/selector')
    }

    function goView() {
        Router.push('/generate/viewer')
    }

    return (
    <div className={styles.scheduleNavbar}>
        <div className={styles.scheduleOption}>
            <button onClick={goSelect}>Seleccionar Clases</button>
        </div>
        <div className={styles.scheduleOption}>
            <button onClick={goView}>Visualizar Horarios</button>
        </div>
    </div>)
}