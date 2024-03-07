import React from 'react'
import FlexRow from '../Layout/FlexRow'


const Textarea = ({ value, onChange, disabled, placeholder, name, form }) => {
    return (
        <div className='relative'>
            <FlexRow className='border border-[#1D1B21] rounded-xl px-3 py-2'>
                <textarea rows={'3'} name={name} className='resize-none border-0 outline-none bg-transparent flex-1 text-sm placeholder:text-[#4F4D52]' onChange={form ? form?.handleChange : onChange} value={form ? form?.values[name] : value} disabled={disabled} placeholder={placeholder}></textarea>
            </FlexRow>
            {
                form && form?.errors[name] && <div className='text-xs text-red-400 first-word w-full pt-2 text-right'>{form?.errors[name]}</div>
            }
        </div>
    )
}

Textarea.defaultProps = {
    form: false
}

export default Textarea