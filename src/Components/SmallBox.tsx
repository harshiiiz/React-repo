import React,{FC} from 'react'

interface prop{
  boxnum:number,
  ellipsize:string
}
const SmallBox: FC<prop> = (props) : JSX.Element=>{
    
  return (
    <>
    <div className = 'parts part1' > { part1values[props.boxnum-1] } </div>
    <div className = 'parts part2' > { props.ellipsize } </div>
    <div className = 'parts part3' > { part3values[props.boxnum-1].repeat(props.boxnum) } </div>  
    
    </>
  )
}
const part1values=['A' , 'B' , 'C', 'D' ,'E' ,'F', 'G', 'H', 'I', 'J'];
const part3values=['one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten '];


export default SmallBox