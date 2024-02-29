import React from 'react'
import FlexRow from '../../Components/Layout/FlexRow'
import Svgs from '../../Svgs'

const Platforms = () => {
    return (
        <FlexRow className={'gap-[4rem] justify-center flex-wrap py-[3rem]'}>
            <div>
                <Svgs.Windows />
            </div>
            <div>
                <Svgs.Andriod />
            </div>
            <div>
                <Svgs.Apple />
            </div>
            <div>
                <Svgs.IOS />
            </div>
        </FlexRow>
    )
}

export default Platforms