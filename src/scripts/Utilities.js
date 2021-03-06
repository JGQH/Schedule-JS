export const startHours = [
    "07:00", "07:50", "08:50", "09:40", "10:40", "11:30", "12:20", "13:10", "14:00", "14:50", "15:50", "16:40", "17:40", "18:30", "19:20", "20:10"
];

export const endHours = [
    "07:50", "08:40", "09:40", "10:30", "11:30", "12:20", "13:10", "14:00", "14:50", "15:40", "16:40", "17:30", "18:30", "19:20", "20:10", "21:00"
];

export const weekDays = [
    "Lunes", "Martes", "Miércoles", "Jueves", "Viernes"
];

export function getDay(day, start, end) {
    return `${weekDays[day]}, ${startHours[start]} - ${endHours[end]}`;
}

export function getClasses() {
    const data = {};
    Object.keys(localStorage).forEach(className => {
        data[className] = JSON.parse(localStorage.getItem(className));
    });
    return data;
}

export function saveClasses(className, groupName, block) {
    const currentGroups = JSON.parse(localStorage.getItem(className) || "{}");
    const currentBlocks = currentGroups[groupName] || [];
    currentBlocks.push(block)
    currentGroups[groupName] = currentBlocks;

    localStorage.setItem(className, JSON.stringify(currentGroups));
}

export function deleteClasses(className, groupName, index) {
    const currentGroups = JSON.parse(localStorage.getItem(className));
    const currentBlocks = currentGroups[groupName];

    currentBlocks.splice(index, 1);
    console.log(currentBlocks);

    if(currentBlocks.length == 0){
        delete currentGroups[groupName];
        console.log(currentGroups);

        if(sizeJson(currentGroups) == 0) {
            localStorage.removeItem(className);
        }else{
            localStorage.setItem(className, JSON.stringify(currentGroups));
        }
    }else{
        currentGroups[groupName] = currentBlocks
        localStorage.setItem(className, JSON.stringify(currentGroups));
    }
}

export function getSelectors() {
    const data = {};
    Object.keys(localStorage).forEach(className => {
        const groups = JSON.parse(localStorage.getItem(className));

        const groupData = {};
        Object.keys(groups).forEach(groupName => {
            groupData[groupName] = true;
        })
        data[className] = groupData;
    })
    return data;
}

export function getSchedules() {
    return JSON.parse(sessionStorage.getItem("schedules")) || [];
}

export function saveSchedule(schedules) {
    sessionStorage.setItem("schedules", JSON.stringify(schedules));
}

export function mapJson(json = {}, callback = (v => v)) {
    return Object.keys(json).map(callback);
}

export function loopJson(json = {}, callback = (v => console.log(v))) {
    Object.keys(json).forEach(callback);
}

export function sizeJson(json = {}) {
    return Object.keys(json).length;
}