import Router from 'next/router'
import Selector from './Selector'
import NavbarOptions from './NavbarOptions'
import styles from './Navbar.module.scss'

export default function Navbar({ tab = 0 }) {
    function goTo(newTab) {
        Router.push(NavbarOptions[newTab].href)
    }

    return (
    <div className={styles.navbarContainer}>
        {NavbarOptions.map((option, index) => {
            const selected = index === tab
            return <Selector key={index} text={option.text} onClick={() => goTo(index)} selected={selected} />
        })}
    </div>)
}