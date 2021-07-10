import { sizeJson, loopJson } from './JsonManager'

function getLocalStorage(key) {
    if(typeof window !== 'undefined') {
        return JSON.parse(localStorage.getItem(key) || '{}')
    }
    return {}
}

function setLocalStorage(key, data) {
    if(typeof window !== 'undefined') {
        const value = JSON.stringify(data)
        localStorage.setItem(key, value)
    }
}

/* CLASSES */
export function getClasses() {
    return getLocalStorage('classes')
}

export function setClasses(classStorage) {
    setLocalStorage('classes', classStorage)
}

export function saveClasses(className, groupName, block) {
    const classStorage = getClasses()

    //Getting specific group for a class
    const currentGroups = classStorage[className] || {}
    const currentBlocks = currentGroups[groupName] || []

    //Stores the new block in the group
    currentBlocks.push(block)
    currentGroups[groupName] = currentBlocks
    classStorage[className] = currentGroups

    //Saves the modification of the class
    setClasses(classStorage)
}

export function deleteClasses(className, groupName, index) {
    const classStorage = getClasses()

    //Getting specific group for a class
    const currentGroups = classStorage[className]
    const currentBlocks = currentGroups[groupName]

    if(currentBlocks.length === 1) {
        //If there is only one block left,...
        if(sizeJson(currentGroups) === 1) {
            //...and there is only this group, delete the whole class instead
            delete classStorage[className]
        } else {
            //...and there is more than 1 group, delete this specific group
            delete currentGroups[groupName]
            classStorage[className] = currentGroups
        }
    } else {
        //Otherwise, only delete the specified block
        currentBlocks.splice(index, 1)
        currentGroups[groupName] = currentBlocks
        classStorage[className] = currentGroups
    }
    //Then save the new state of the class
    setClasses(classStorage)
}

/* SELECTORS */
export function getSelectors() {
    if(typeof window !== "undefined") {
        const currentClasses = localStorage.getItem('classes') || '{}'
        const previousClasses = localStorage.getItem('prev-classes') || '{}'

        if(currentClasses === previousClasses) {
            //Anything about the classes has changed, load previous checkers
            return getLocalStorage('selectors')
        } else {
            //Recalculate for new class selectors
            const selectorsStorage = {}
            const classesStorage = getClasses()

            //Loop all through all current classes
            loopJson(classesStorage, className => {
                const currentGroups = classesStorage[className]

                //For each class, loop through all its groups
                const groupData = {}

                loopJson(currentGroups, groupName => {
                    //By default, each group will be selected
                    groupData[groupName] = true
                })

                //Set the list of checked groups
                selectorsStorage[className] = groupData
            })

            localStorage.setItem('prev-classes', currentClasses)
            setSelectors(selectorsStorage)
            return selectorsStorage
        }
    }
    return {}
}

export function setSelectors(selectorsStorage) {
    setLocalStorage('selectors', selectorsStorage)
}

/* SCHEDULE */
export function getSchedules() {
    if(typeof window !== "undefined") {
        return JSON.parse(localStorage.getItem('schedules') || '[]')
    }
    return []
}

export function saveSchedules(schedules) {
    setLocalStorage('schedules', schedules)
}