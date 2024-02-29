import React from 'react'

const FlexCol = ({ onClick, className, children }) => {
    return (
        <div onClick={onClick} className={`flex flex-col gap-2 ${className}`}>{children}</div>
    )
}

export default FlexCol