// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const Box = ({className='',style,children,size='',...restProps})=>{
  const sizeClassname = size ? `box--${size}`:'';
  return <div className={`${className} ${sizeClassname}`} style={style} {...restProps}>{children}</div>
}

// const smallBox = <div className='box box--small' style={{background:'lightblue'}}>small lightblue box</div>
// const mediumBox = <div className='box box--medium' style={{background:'pink'}}>medium pink box</div>
// const largeBox = <div className='box box--large' style={{background:'orange'}}>large orange box</div>

function App() {
  return (
    <div style={{fontStyle:'italic'}} >
      {/* {smallBox}
      {mediumBox}
      {largeBox} */}
      <Box 
      //  className='box box--small'
        size='small' style={{background:'lightblue'}} children='small lightblue box'/>
      <Box 
      //  className='box box--medium'
      size='medium'
       style={{background:'pink'}} children='medium pink box'/>
      <Box 
      //  className='box box--large' s
      size='large'
       style={{background:'orange'}} children='small orange box'/>


    </div>
  )
}

export default App
