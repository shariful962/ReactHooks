import React, {useMemo} from 'react'

function Header() {

  console.log("Header Render ")

  return (
    <div>
      <h2>Header</h2>
    </div>
  )
}

export default React.memo(Header)
