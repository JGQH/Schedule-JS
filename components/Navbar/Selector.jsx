import styles from './Navbar.module.scss'

const Selector = ({ text, onClick, selected }) => {
    return (
        <div className={`${styles.navOption} ${selected && styles.navSelected}`} onClick={() => onClick && onClick()}>
            <h4>{text.toUpperCase()}</h4>
        </div>
    );
}

export default Selector