import styles from './Navbar.module.scss'

const Selector = ({ text, onClick }) => {
    return (
        <div className={styles.navOption} onClick={() => onClick && onClick()}>
            <h4>{text.toUpperCase()}</h4>
        </div>
    );
}

export default Selector