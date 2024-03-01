import React, { useState } from 'react'
import FlexRow from '../Layout/FlexRow'
import Svgs from '../../Svgs'

const Input = ({ type, value, onChange, disabled, placeholder, name, form }) => {
    const [Type, setType] = useState(type)
    return (
        <div className='relative'>
            <FlexRow className='border border-[#1D1B21] rounded-xl px-3 py-2'>
                <input name={name} type={Type} className='border-0 outline-none bg-transparent flex-1 text-sm placeholder:text-[#4F4D52]' onChange={form ? form?.handleChange : onChange} value={form ? form?.values[name] : value} disabled={disabled} placeholder={placeholder} />
                {
                    type === 'password' && <div onClick={() => {
                        setType(Type === 'text' ? "password" : "text")
                    }} className='cursor-pointer'><Svgs.Eye fill={Type === 'text' && "#CC1919"} /></div>
                }
            </FlexRow>
            {
                form && form?.errors[name] && <div className='text-xs text-red-400 first-word w-full pt-2 text-right'>{form?.errors[name]}</div>
            }
        </div>
    )
}

Input.defaultProps = {
    type: "text",
    form: false
}

export default Input