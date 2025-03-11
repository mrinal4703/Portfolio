import React from 'react'

const SectionHeading1 = ({firstTitle,secondTitle}) => {
  return (
   <div>
     <h1 className='md:text-[40px] xls:text-[30px] font-bold text-white'>{firstTitle}
        <span className='md:text-purple-600 xls:text-purple-600'>{secondTitle}</span></h1>
        
   </div>
  )
}

export default SectionHeading1