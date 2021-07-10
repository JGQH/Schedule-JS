import { useState } from 'react'
import { getSelectors, setSelectors } from '@Utilities/StorageManager'

export function useSelectors() {
    const [states, setStates] = useState(getSelectors())

    function changeStates(className, groupName, value) {
        const newStates = {...states}
        newStates[className][groupName] = value
        setStates(newStates)
        setSelectors(newStates)
    }

    return [states, changeStates]
}