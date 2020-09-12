import React from 'react';
import Navigator from '../components/Navigator';
import Carousels from '../components/Carousels';

const Index = () => {
    return (
        <div>
            <Navigator />
            <div style={{ marginTop: '80px' }}>
                <Carousels />
            </div>
            {/* <div style={{ backgroundColor: 'black', height: '1500px', }}>test 입니다</div> */}

        </div>
    );

}


export default Index;