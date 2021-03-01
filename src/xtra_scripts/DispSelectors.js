import { mapJson } from '../scripts/Utilities';

const DispGroups = (states, className, setState) => (
    mapJson(states[className], (groupName, index) => {
        //Each class has a list of its groups
        return (
        <div key={index}>
            <label>{groupName}</label>
            <input type="checkbox" onChange={evt => setState(className, groupName, evt.target.checked)} checked={states[className][groupName]} />
        </div>
        )
    })
);

const DispClasses = ({states, setState}) => (
    mapJson(states, (className, index) => {
        //Creates list of all classes
        return (
            <div key={index} className="schedule-checker">
                <div className="schedule-class">
                    <p>{className}</p>
                </div>
                <div className="schedule-groups">
                    {DispGroups(states, className, setState)}
                </div>
            </div>
        )
    })
);

export default DispClasses;