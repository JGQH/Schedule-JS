export function keyJson(json = {}) {
    return Object.keys(json)
}

export function mapJson(json = {}, callback = (v => v)) {
    return keyJson(json).map(callback)
}

export function loopJson(json = {}, callback = (v => console.log(v))) {
    keyJson(json).forEach(callback)
}

export function sizeJson(json = {}) {
    return keyJson(json).length
}