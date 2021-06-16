import { observer } from 'mobx-react';
import React from 'react';
import Counter from '../../Stors/Counter/Counter';
import { ButtonMenu } from './MenuStyls';

const Menu = () => {

    const alertFunc = () => {
        alert('hello');
    }
    return(
        <>
        {Counter.total}
        <br />
        {Counter.count}
        <br />
        <ButtonMenu onClick={() => Counter.ingriment()}>Open</ButtonMenu>
        <ButtonMenu onClick={() => Counter.decriment()}>Clouse</ButtonMenu>
        <ButtonMenu onClick={alertFunc}>Clouse</ButtonMenu>
        </>
    )
}


export default observer( Menu);