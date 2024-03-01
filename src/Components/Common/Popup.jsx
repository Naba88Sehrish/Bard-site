import React from "react";
import Svgs from "../../Svgs";

const Popup = ({ open, close, heading, children, parent_class }) => {
    return (
        open && <div className="fixed inset-0 h-[100vh] w-[100vw] z-[4444] flex justify-center items-center">
            <div className="bg-[#101928]/30 backdrop-blur-sm absolute inset-0 z-[1]" />
            <div className="relative overflow-hidden bg-[#040209] text-white shadow-2xl rounded-2xl xl:w-[40vw] lg:w-[50vw] w-[80vw] z-[2] slide-in-elliptic-top-fwd">
                <div className="sticky top-0 bg-[#040209] z-[22]">
                    <div className="absolute top-0 right-0 bg-[#CC1919] px-[1.6rem] py-[1rem] rounded-bl-2xl cursor-pointer" onClick={() => {
                        close((s => !s))
                    }}>
                        <Svgs.Close size={"1rem"} color={"#040209"} />
                    </div>
                    <h1 className="p-[1.2rem] normal-case font-semibold text-xl text-left pr-[4.15rem]">
                        {heading}
                    </h1>
                    <hr />
                </div>
                <div className={`p-[1.2rem] overflow-y-auto overflow-x-hidden scroll-hidden lg:max-h-[75vh] max-h-[65vh] ${parent_class}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Popup;