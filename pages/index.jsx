import styles from 'styles/Landpage.module.scss'

export default function Home() {
    return (
    <div className={styles.landpageContainer}>
        <h1 className={styles.landpageTitle}>Tutorial</h1>
        <div className={styles.landpageParagraph}>
            <p>Bienvenido a 'Schedule App', una simple página para generar horarios creada por el usuario <a href='https://github.com/JGQH'>@JGQH</a></p>
        </div>
        <div className={styles.landpageParagraph}>
            <h3>¿Cómo funciona?</h3>
            <p>La aplicación funciona recorriendo todas las posibilidades de combinaciones de los diferentes <i>bloques</i> de cada curso.</p>
            <p>¿Qué es un bloque? Los bloques son las diferentes partes que componen un horario. Por ejemplo, un bloque podría ser '07:00 - 08:40'. En otras palabras, un bloque representa cada lapso de tiempo en el que se debe considerar que el usuario está en clases. Por regla general, los bloques no pueden cruzarse unos con otros, por lo que se debe tomar esto en cuenta si no se genera ningún horario final.</p>
            <p>Los bloques (Y el curso al que pertenece) los debe generar en el apartado <i>'Crear Bloques'</i>.</p>
        </div>
        <div className={styles.landpageParagraph}>
            <h3>¿Para qué sirve separarlos por curso?</h3>
            <p>Como en un horario normal, cada curso está asociado a uno o más bloques, por lo que cambiar el curso elegido durante el programa cambia la lista de bloques que se deben de considerar para crear los horarios.</p>
            <p>Los cursos agregados (Y sus bloques correspondientes) se visualizan en el apartado <i>'Visualizar Cursos'</i>.</p>
        </div>
        <div className={styles.landpageParagraph}>
            <h3>¿Qué hace luego de recorrer todas las posibilidades?</h3>
            <p>Luego de hacer eso (Sin contar todas las posibilidades que tienen algún bloque se cruzándose con otro), se devuelve la lista de horarios generados. Los horarios se presentan uno por uno mediante un selector, mostrando una gráfica del horario actual.</p>
            <p>La selección de cursos a considerar, además de la visualización de resultados, se realiza en el apartado <i>'Horarios Generados'</i></p>
        </div>
    </div>)
}