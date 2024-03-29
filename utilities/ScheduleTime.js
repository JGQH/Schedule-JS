export const startHours = [
    '07:00', '07:50', '08:50', '09:40', '10:40', '11:30', '12:20', '13:10', '14:00', '14:50', '15:50', '16:40', '17:40', '18:30', '19:20', '20:10'
]

export const endHours = [
    '07:50', '08:40', '09:40', '10:30', '11:30', '12:20', '13:10', '14:00', '14:50', '15:40', '16:40', '17:30', '18:30', '19:20', '20:10', '21:00'
]

export const weekDays = [
    'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'
]

export function getDay(day, start, end) {
    return `${weekDays[day]}, ${startHours[start]} - ${endHours[end]}`
}