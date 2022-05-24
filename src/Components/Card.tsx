
import React ,{FC} from 'react'
import LineConnection from './LineConnection';
import SmallBox from './SmallBox'

interface Smallboxprops{
  ellipsize:string,
  boxnum:number
}
const Card: FC<Smallboxprops>=(props): JSX.Element=> {
  
  return (
    <>
    <div className = {`box box${ props.boxnum }`} >

       <SmallBox ellipsize = { props.ellipsize }  boxnum = { props.boxnum } />
       <LineConnection />
       <div className = "circle"></div>
  
    </div>
      
    </>
  )
}

export default Card