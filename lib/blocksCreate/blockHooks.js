import { useState } from 'react'
import { getDay } from '@Utilities/ScheduleTime';
import { saveClasses } from '@Utilities/StorageManager'

export function useBlock() {
    const [blockClass, setClass] = useState('');
    const [blockGroup, setGroup] = useState('');
    const [blockDay, setDay] = useState(0);
    const [blockStart, setStart] = useState(0);
    const [blockEnd, setEnd] = useState(0);

    const block = {
        'class': blockClass,
        'group': blockGroup,
        'day': blockDay,
        'start': blockStart,
        'end': blockEnd
    }

    function setter(key, value) {
        switch(key) {
            case 'class':
                return setClass(value)
            case 'group':
                return setGroup(value)
            case 'day':
                return setDay(value)
            case 'start':
                return setStart(value)
            case 'end':
                return setEnd(value)
        }
    }

    return [block, setter]
}

export function uploadBlock(block) {
    const blockDay = getDay(block.day, block.start, block.end)
    const course = `${block.class} [${block.group}] (${blockDay})`;

    if(block.class.trim().length > 0 && block.group.trim().length > 0) {
        if(window.confirm(`¿Seguro que desea guardar este bloque del curso ${course}?`)){
            const newBlock = {
                'Day': block.day,
                'Start': block.start,
                'End': block.end
            };

            saveClasses(block.class, block.group, newBlock)
            alert('¡Bloque agregado satisfactoriamente!')
        }
    }
}