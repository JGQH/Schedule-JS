import Router from 'next/router'
import styles from './BlockNavbar.module.scss'

export default function BlockNavbar({ isCreate }) {
    function goCreate() {
        Router.push('/blocks/create')
    }

    function goDelete() {
        Router.push('/blocks/delete')
    }

    return (
    <div className={styles.blocksNavbar}>
        <div className={styles.bnavTitle}>
            <h1>{isCreate ? 'Crear Bloques' : 'Eliminar Bloques'}</h1>
        </div>
        <div id={styles.bnavCreate} className={styles.bnavOption}>
            <button onClick={goCreate}>Crear Bloques</button>
        </div>
        <div id={styles.bnavDelete} className={styles.bnavOption}>
            <button onClick={goDelete}>Eliminar Bloques</button>
        </div>
    </div>)
}