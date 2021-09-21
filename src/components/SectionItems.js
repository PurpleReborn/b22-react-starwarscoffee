import React, { useEffect, useState } from 'react'
import  Counts  from './Count'

function SectionItems ({
  title,
  stateValue,
  onClick,
}) {
  const [item, setItem] = useState('1')


  const onIncrease = (idx) => {
    const data = [...item]
    data[idx].amount = data[idx].amount + 1
    console.log(data)
    setItem(data)
  }

  const onDecrease = (idx) => {
    const data = [...item]
    data[idx].amount = data[idx].amount - 1
    console.log(data)
    setItem(data)
  }

  return (
    <div className="flex flex-col md:flex-row md:space-x-12 justify-center items-center -mb-20"> 


    <div className="bg-white flex flex-row justify-between md:h-40 h-28 mx-10 shadow-lg pt-10 px-4 md:px-32">
        <div className="flex  md:flex-row space-x-6 md:space-x-10">
        <div className="bg-yellow-900 md:w-20 w-14 h-14 md:h-20 rounded-full">{title}</div>
        <div className="flex flex-col">
            <div className="md:pt-7 md:px-8 font-bold uppercase"></div>
        </div>
        </div>

        <div className="md:pt-7" >
        {item.map((res, idx) => {
            return (
              <Counts
                key={res.name}
                onIncrease={() => onIncrease(idx)}
                onDecrease={() => onDecrease(idx)}
                stateValue={stateValue}
       
              />
            )
          })}
        </div>

    </div>

    <div> <button
    onClick={onClick}
    className="md:mt-0 mt-10 bg-yellow-400 hover:bg-yellow-200 rounded-md w-32 md:w-60 md:h-40 h-14 font-bold ">CHECKOUT</button> </div>

</div>
  )
}

export default SectionItems