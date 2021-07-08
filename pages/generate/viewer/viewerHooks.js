import { useState } from 'react'
import { generateSchedules } from './generator'
import { getSchedules, saveSchedules, getSelectors } from '@Utilities/StorageManager'

export function useSchedules() {
    const [schedules, setSchedules] = useState(getSchedules())

    function doSchedules() {
        const states = getSelectors()
        const newSchedules = generateSchedules(states)

        setSchedules(newSchedules)
        saveSchedules(newSchedules)
        alert('¡Horarios generados correctamente!')
    }

    return [schedules, doSchedules]
}