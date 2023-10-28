import React from 'react'

type Props={
    children: string | JSX.Element,
    color?: string
}

const SimpleButton = ({children, color}: Props) => {
    let classes: string = ''
    switch(color){
        case 'primary': classes+='hover:border-b-2 border-[#FF6636] text-[#FF6636]'; break;
        case 'secondary': classes+='hover:border-b-2 border-[#564FFD] text-[#564FFD]'; break;
        case 'gray': classes+='hover:border-b-2 border-[#1D2026] text-[#1D2026]'; break;
        case 'success': classes+='hover:border-b-2 border-[#23BD33] text-[#23BD33]'; break;
        case 'warning': classes+='hover:border-b-2 border-[#FD8E1F] text-[#FD8E1F]'; break;
        case 'danger': classes+='hover:border-b-2 border-[#E34444] text-[#E34444]'; break;
        default: classes+='hover:border-b-2 border-[#FF6636] text-[#FF6636]';
    }
  return (
    <button className={classes}>{children}</button>
  )
}

export default SimpleButton