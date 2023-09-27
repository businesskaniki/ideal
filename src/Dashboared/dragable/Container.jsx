import { useCallback, useState } from 'react'
import { FileList } from './FileList.jsx'
export const Container = () => {
  const [droppedFiles, setDroppedFiles] = useState([])
  const handleFileDrop = useCallback(
    (item) => {
      if (item) {
        const files = item.files
        setDroppedFiles(files)
      }
    },
    [setDroppedFiles],
  )
  return (
    <div>
      <FileList files={droppedFiles} />
    </div>
  )
}
