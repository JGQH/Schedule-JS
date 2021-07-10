import { setClasses } from '@Utilities/StorageManager'

const TestClasses = {
    'Dirección Estratégica': {
        'A': [{'Day': 0,'Start': 3,'End': 5},{'Day': 2,'Start': 6,'End': 7},{'Day': 4,'Start': 3,'End': 4}],
        'B': [{'Day': 3,'Start': 11,'End': 13},{'Day': 4,'Start': 10,'End': 15}],
        'C': [{'Day': 0,'Start': 6,'End': 7},{'Day': 1,'Start': 6,'End': 7},{'Day': 4,'Start': 5,'End': 7}],
        'D': [{'Day': 0,'Start': 11,'End': 12},{'Day': 3,'Start': 8,'End': 9}]
    },
    'Dirección Ambiental': {
        'A': [{'Day': 0,'Start': 6,'End': 7},{'Day': 4,'Start': 0,'End': 2}],
        'B': [{'Day': 0,'Start': 8,'End': 10},{'Day': 3,'Start': 14,'End': 15}],
        'c': [{'Day': 3,'Start': 0,'End': 2},{'Day': 1,'Start': 0,'End': 1}]
    },
    'Ingeniería del Producto': {
        'A': [{'Day': 1,'Start': 2,'End': 3},{'Day': 2,'Start': 2,'End': 3},{'Day': 3,'Start': 2,'End': 4}],
        'B': [{'Day': 1,'Start': 8,'End': 9},{'Day': 2,'Start': 10,'End': 12},{'Day': 4,'Start': 12,'End': 13}],
        'C': [{'Day': 0,'Start': 3,'End': 5},{'Day': 3,'Start': 7,'End': 7},{'Day': 4,'Start': 2,'End': 4}],
        'D': [{'Day': 1,'Start': 10,'End': 12},{'Day': 2,'Start': 13,'End': 14},{'Day': 3,'Start': 10,'End': 11}]
    },
    'Dirección de Proyectos': {
        'A': [{'Day': 1,'Start': 4,'End': 6},{'Day': 2,'Start': 4,'End': 5}, {'Day': 3,'Start': 5,'End': 6}],
        'B': [{'Day': 0,'Start': 13,'End': 14},{'Day': 1,'Start': 13,'End': 15},{'Day': 2,'Start': 13,'End': 14}],
        'C': [{'Day': 1,'Start': 2,'End': 3},{'Day': 2,'Start': 2,'End': 4},{'Day': 3,'Start': 2,'End': 3}],
        'D': [{'Day': 0,'Start': 13,'End': 14},{'Day': 1,'Start': 13,'End': 15},{'Day': 2,'Start': 8,'End': 10},{'Day': 4,'Start': 8,'End': 9}]
    },
    'Sistemas de Información': {
        'A': [{'Day': 0,'Start': 0,'End': 2}],
        'B': [{'Day': 1,'Start': 10,'End': 12}],
        'C': [{'Day': 2,'Start': 0,'End': 1},{'Day': 2,'Start': 1,'End': 1}],
        'D': [{'Day': 3,'Start': 12,'End': 14}]
    }
}

export function createTest() {
    setClasses(TestClasses)
    alert('¡Ejemplo añadido!')
}