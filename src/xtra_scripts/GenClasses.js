import { getClasses, loopJson, sizeJson } from '../scripts/Utilities'

/* NOTE: This algorithm is basically brute force, so it will check all the possibilities, which can result in a slow "creation" time (Also, not precisely optimized) */

let data, counter, jgroups, jlists;
/*
    ~data {json}: Contains all blocks that were selected
    ~counter {number}: Amount of possibilities that the algorithm will go through, used to determine when to stop the loop
    ~jgroups {json}: Contains the "group index" of each class, which allows us to easily loop through each group of every class
    ~jlists {list}: Contains all the combination of courses (classes + group) that are valid
*/
function generateSchedules(selecting) {
    if(prepareSchedules(selecting)) return []; //Exits if no block was selected
    setGeneral();
    
    do {
        checkGroups()
    } while(loopGroups())

    return jlists;
}

/**
 * Sets the blocks of each class that was selected
 * @param {{}} selecting The json of classes that are selected or not
 */
function prepareSchedules(selecting) {
    const classes = getClasses();
    data = {};
    loopJson(selecting, className => { //Checking every class
        const selectedGroups = {};
        const groups = selecting[className]
        loopJson(groups, groupName => { //From each class, we get it's groups
            if(groups[groupName]) { //If a group is selected, save the blocks it has
                selectedGroups[groupName] = classes[className][groupName];
            }
        })

        if(sizeJson(selectedGroups) > 0) { //If no groups were selected, it is not added to the data
            data[className] = selectedGroups
        }
    });

    return sizeJson(data) == 0;
}

/**
 * Sets initial values to the holder of groups and the counter
 */
function setGeneral(){
    jlists = [];
    jgroups = {};
    counter = 1;

    loopJson(data, className => {
        jgroups[className] = 0;
        counter *= sizeJson(data[className]);
    })
}

/**
 * Switches the current groups of the classes for a new combination
 * @returns {boolean} Returns false if all the combinations have already been checked. Otherwise, returns true.
 */
function loopGroups() {
    if(counter == 1) return false; //If all combinations have been checked, don't continue

    const classNames = Object.keys(jgroups)
    for(let i = 0; i < classNames.length; i++){
        const className = classNames[i]
        const igroup = jgroups[className] + 1; //From every class, we add 1 to the current "index" of the group

        if(igroup == Object.keys(data[className]).length){  //If we reached the limit, it goes back to 0
            jgroups[className] = 0;
        }else{  //If not, just saves the current group and exits the for cycle
            jgroups[className] = igroup;
            break;
        }

        /* NOTE: The reason it only breaks when not going back to 0 is that, if this group reached the limit, then the next group has to go trough this same process. Therefore, this repetition should only break if the "group index" hasn't reached it's limit */
    }

    counter--; //One more combination checked
    return true;
}

/**
 * Checks if the current group combination is valid
 */
function checkGroups() {
    const schedule = [[], [], [], [], []]; //Just a holder to check if the blocks are valid through the days
    const classes = {}; //Holder for which course (class + group) will be saved with it's blocks

    //STEP 1: Getting which groups to evaluate based on jgroups (Combination of current groups)
    loopJson(data, className => {
        const groupNames = Object.keys(data[className]);
        const groupName = groupNames[jgroups[className]]; //groupNames[igroup] from loopGroups

        const courseName = `${className} [${groupName}]`;
        classes[courseName] = data[className][groupName]; //Saving group blocks under course name
    });

    //STEP 2: Check if none of the blocks intersect
    for (const courseName in classes) {
        const blocks = classes[courseName];
        for(let i = 0; i < blocks.length; i++){
            const block = blocks[i];
            const dayBlocks = schedule[block.Day];

            if(!checkBlocks(dayBlocks, block)) return;
        }
    }

    //STEP 3: If we reached this point, it means all blocks of current group combination are valid. Therefore, it has to be stored
    jlists.push(classes);
}

/**
 * Returns if a block can be introuced in the day it belongs to without any issue
 * @param {[]} day  List of blocks of the day
 * @param {{}} block1 Block to be checked
 * @returns {boolean} Returns if the block is valid
 */
function checkBlocks(day, block1) {
    const [startHour1, endHour1] = [block1.Start, block1.End];

    for(let i = 0; i < day.length; i++){
        const block2 = day[i];
        const [startHour2, endHour2] = [block2.Start, block2.End]; //Gets a block of the current day

        if(!((startHour2 > endHour1) || (startHour1 > endHour2))) return false; //If not ("block2 starts after block1 ends" or "block1 starts after block2 ends"), it intersects, so return False.
    }

    //If we reached this point, the block is valid, therefore push to array of the day and return True
    day.push(block1);
    return true;
}

export { generateSchedules };