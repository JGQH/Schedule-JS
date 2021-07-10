import { useState, useEffect } from 'react';
import { getClasses } from '@Utilities/StorageManager';
import { keyJson } from '@Utilities/JsonManager'

export function useClass() {
    const classesStorage = getClasses()
    const classesList = keyJson(classesStorage)

    const [currentClass, setName] = useState()
    const [currentGroup, setGroup] = useState()

    function setter(key, value) {
        switch (key) {
            case 'name':
                //When currentClass is modified, the group is set to the first one
                const className = classesList[value]
                setName(className)

                const groupList1 = keyJson(classesStorage[className])
                setGroup(groupList1[0])
                break
            case 'group':
                //Gets the correct group based on the groups of the currentClass
                const groupList2 = keyJson(classesStorage[currentClass])
                setGroup(groupList2[value])
                break
        }
    }

    //Sets a className when component is mounted
    useEffect(() => {
        setter('name', 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const blockList = classesStorage[currentClass] && classesStorage[currentClass][currentGroup]

    return [classesList, keyJson(classesStorage[currentClass]), setter, blockList]
}