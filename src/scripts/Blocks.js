import BlockCreator from '../xtra_scripts/BlockCreator';
import { useState } from 'react';

const Blocks = () => {
  const [creating, isCreating] = useState(true);

  return (
    <>
      <h1>{creating ? "Crear Bloques" : "Eliminar Bloques"}</h1>
      <div className="blocks-container-selector">
        <div className="blocks-selector">
          <button onClick={() => isCreating(true)}>Crear Bloques</button>
        </div>
        <div className="blocks-selector">
          <button onClick={() => isCreating(false)}>Eliminar Bloques</button>
        </div>
      </div>
      {creating ?
        <BlockCreator />
      :
        <></>
      }
      
    </>
  )
}

export default Blocks