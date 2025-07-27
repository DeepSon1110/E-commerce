import React from 'react'

const PageA = () => {
    const {name,age} = useMyContext()
  return (
    <div>
        PageA
        {name}
        </div>
  )
}

export default PageA