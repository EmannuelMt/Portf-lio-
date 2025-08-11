import { useEffect, useState } from 'react'
import { Storage } from '../utils/storage'

export default function LastVisited() {
  const [lastVisited, setLastVisited] = useState([])

  useEffect(() => {
    setLastVisited(Storage.getLastVisited())
  }, [])

  return (
    <div className="last-visited">
      {lastVisited.length > 0 && (
        <>
          <h3>Últimas páginas visitadas:</h3>
          <ul>
            {lastVisited.map((path, index) => (
              <li key={index}>{path}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}