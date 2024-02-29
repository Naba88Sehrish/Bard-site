import React from 'react'

const FlexRow = ({ className, onClick, children }) => {
    return (
        <div onClick={onClick} className={`flex items-center gap-2 ${className}`}>{children}</div>
    )
}

export default FlexRow