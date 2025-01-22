import React from 'react'
import '../Left/Left.css'
import Header from '../../__molecules/Header/Header'
import Circle from '../../__molecules/Circle/Circle'
import LastText from '../../__molecules/LastText/LastText'


const Left = () => {
  return (
    <div className='Left'>
      <Header/>
      <Circle/>
      <LastText/>
    </div>
  )
}

export default Left