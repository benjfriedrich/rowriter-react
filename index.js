import React from 'react'
import RoWriter from './rowriter'

import useWindowDim from './useWindowDim'


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

    const RoWrite = ({list, maxWidth, rowComponent, componentWidth}) => {

        const size = useWindowDim()

        const windowWidth = size.width

        const maxFit = Math.floor(windowWidth / componentWidth)

        const width = maxWidth <= maxFit ? maxWidth : maxFit

        const roList = RoWriter(list, width)

        const length = roList[0].length

        const Row = rowComponent || DefaultRow

    return(

    <div style={{ width:'100%'}}>

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