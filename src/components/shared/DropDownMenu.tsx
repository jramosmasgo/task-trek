import React, { useCallback, useEffect, useRef, useState } from 'react'

interface DropDownMenuProps {
    positionTop?: number;
    positionBottom?: number;
    positionLeft?: number;
    positionRight?: number;
    buttonActivator: React.ReactNode;
    children: React.ReactNode;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ children, positionBottom, positionTop, positionLeft, positionRight, buttonActivator }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const openCloseDropDown = useCallback(() => {
        setOpen(prevOpen => !prevOpen);
    }, []);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`dropdown p-relative`} ref={dropdownRef} >
            <div onClick={() => openCloseDropDown()}>
                {buttonActivator}
            </div>
            <div className={`dropdown-content ${open ? "dropdown-content_open" : ""}`} style={{ top: positionTop, bottom: positionBottom, right: positionRight, left: positionLeft }}>
                {children}
            </div>
        </div>
    )
}

export default DropDownMenu