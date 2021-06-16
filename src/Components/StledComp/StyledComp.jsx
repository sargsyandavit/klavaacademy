import React from 'react';
import { BlockEx, StylsConsole, StylsHeader, StyledBotton, CopyButton} from './StyledCompStyls';

const StyledComp = () => {
    return(
        <>
        <BlockEx justify={'center'} >
        <StylsHeader color={'green'}>StyledComponent</StylsHeader>
        
        </BlockEx>
        <BlockEx>
           <div>hj</div> <StyledBotton align={'flex-end'}>SentTo</StyledBotton></BlockEx>
           <CopyButton>Copy button</CopyButton>
        
        {/* <StylsConsole></StylsConsole> */}
        
        </>
    )
}

export default StyledComp;