import React from 'react'

function Pagination() {
  return (
    <div className='paginate'>
        <button className="paginate__prev">Prev</button>
        <span>1/500</span>
        <button className="paginate__next">Next</button>
    </div>
  )
}

export default Pagination