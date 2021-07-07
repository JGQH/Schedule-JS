import Router from 'next/router'

export default function BlockNavbar({ isCreate }) {
    function goCreate() {
        Router.push('/blocks/create')
    }

    function goDelete() {
        Router.push('/blocks/delete')
    }

    return (
    <>
        <h1>{isCreate ? 'Crear Bloques' : 'Eliminar Bloques'}</h1>
        <div className='blocks-container-selector'>
            <div className='blocks-selector'>
                <button onClick={goCreate}>Crear Bloques</button>
            </div>
            <div className='blocks-selector'>
                <button onClick={goDelete}>Eliminar Bloques</button>
            </div>
        </div>
    </>)
}