import { mapJson } from '@Utilities/JsonManager'
import styles from './DispSelectors.module.scss'

const DispGroups = ({ states, className, setState }) => {
    //Create list of groups for each class
    return mapJson(states[className], (groupName, index) => (
        <div key={index}>
            <label>{groupName} </label>
            <input type='checkbox' onChange={e => setState(className, groupName, e.target.checked)} checked={states[className][groupName]} />
        </div>
    ))
};

const DispClasses = ({states, setState}) => {
    //Creates list of all classes
    return mapJson(states, (className, index) => (
        <div key={index} className={styles.checkerManager}>
            <div className={styles.checkerClass}>
                <p>{className}</p>
            </div>
            <div className={styles.checkerGroups}>
                <DispGroups {...{states, className, setState}} />
            </div>
        </div>
    ))
};

export default DispClasses;