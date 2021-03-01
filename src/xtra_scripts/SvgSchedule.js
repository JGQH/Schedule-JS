import { mapJson } from '../scripts/Utilities';
import { useState, useEffect } from 'react';

const SvgSchedule = ({schedules = []}) => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        setIndex(0);
    }, [schedules]);

    return <>
        {mapJson(schedules[index], (courseName, index1) => {
            return <p key={index1}>{courseName}</p>
        })}
    </>
}

export default SvgSchedule;