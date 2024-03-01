import React, { useState, useRef, useEffect } from 'react';

const VerificationCodeInput = ({ setValue, form }) => {
    const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
    const inputRefs = useRef([...Array(4)].map(() => React.createRef()));

    const handleChange = (index, value) => {
        const updatedCode = [...verificationCode];
        updatedCode[index] = value;

        if (value && index < verificationCode.length - 1) {
            inputRefs.current[index + 1].current.focus();
        }

        setVerificationCode(updatedCode);
    };

    const handleBackspace = (index, event) => {
        if (!verificationCode[index] && index > 0) {
            inputRefs.current[index - 1].current.focus();
        }

        event.preventDefault();

        const updatedCode = [...verificationCode];
        updatedCode[index] = '';
        setVerificationCode(updatedCode);
    };

    useEffect(() => {
        let val = verificationCode.join('');
        if (val.length === 4) {
            setValue(val)
        }
    }, [verificationCode]);

    return (
        <>
            <div className="flex justify-center space-x-2">
                {verificationCode.map((digit, index) => (
                    <input
                        key={index}
                        ref={inputRefs.current[index]}
                        type="text"
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => e.key === 'Backspace' && handleBackspace(index, e)}
                        maxLength="1"
                        className="w-14 h-14 text-center border bg-transparent border-[#1d1b21] rounded-xl focus:outline-none focus:border-[#CC1919]"
                    />
                ))}
            </div>
            {
                form?.errors?.otp && <div className='text-xs text-red-400 first-word w-full pt-2 text-center'>{form?.errors?.otp}</div>
            }
        </>
    );
};

export default VerificationCodeInput;
