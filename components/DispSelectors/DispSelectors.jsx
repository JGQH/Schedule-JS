import { mapJson } from '../../utilities/JsonManager'

const DispGroups = ({ states, className, setState }) => {
    function changeState(e) {
        const checked = e.target.checked
        setState(className, groupName, checked)
    }

    //Create list of groups for each class
    return mapJson(states[className], (groupName, index) => (
        <div key={index}>
            <label>{groupName}</label>
            <input type='checkbox' onChange={changeState} checked={states[className][groupName]} />
        </div>
    ))
};

const DispClasses = ({states, setState}) => {
    //Creates list of all classes
    return mapJson(states, (className, index) => (
        <div key={index} className='schedule-checker'>
            <div className='schedule-class'>
                <p>{className}</p>
            </div>
            <div className='schedule-groups'>
                <DispGroups {...{states, className, setState}} />
            </div>
        </div>
    ))
};

export default DispClasses;