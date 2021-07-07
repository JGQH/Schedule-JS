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
    <>
        <h1>{isCreate ? 'Crear Bloques' : 'Eliminar Bloques'}</h1>
        <div className={styles.blocksNavbar}>
            <div className={styles.blocksOption}>
                <button onClick={goCreate}>Crear Bloques</button>
            </div>
            <div className={styles.blocksOption}>
                <button onClick={goDelete}>Eliminar Bloques</button>
            </div>
        </div>
    </>)
}