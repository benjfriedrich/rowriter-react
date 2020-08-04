import React from 'react'
import RoWriter from 'rowriter'

const DefaultItem = (props) => {
        

    return(
    <div style={{margin:'0 10px'}} >
    
    {props.children}
    
    </div>)

}

const DefaultRow = (props) => {

    return(
    <div style={{ 
        
        display: 'flex',
        justifyContent: 'center'}}>
    
    {props.children}
    
    </div>)

}

const RoWrite = ({className, list, maxWidth, rowComponent, setWidth}) => {

    const width = maxWidth

    const roList = RoWriter(list, width)

    const length = roList[0].length

    typeof setWidth === 'function' ? setWidth(length) : null

    const Row = rowComponent || DefaultRow

return(

<div className={className} style={{ width:'100%'}}>

    {roList.map((r, i) =>
        
        <Row style={{justifyContent:`${r.length < length ? 'flexStart' : null}` }} key={i}>
        
            {r.map((item, i) => 

                <div key={i}>

                {item}
                
                </div>
                )}
        
        </Row>
        
        )

    }

</div>

)

}

export default RoWrite