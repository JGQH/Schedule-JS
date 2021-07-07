import Router from 'next/router'

export default function GeneratorNavbar() {
    function goSelect() {
        Router.push('/generate/selector')
    }

    function goView() {
        Router.push('/generate/viewer')
    }

    return (
    <div className='schedule-container-selector'>
        <div className='schedule-selector'>
            <button onClick={goSelect}>Seleccionar Clases</button>
        </div>
        <div className='schedule-selector'>
            <button onClick={goView}>Visualizar Horarios</button>
        </div>
    </div>)
}