import Navbar from '@/components/shared/Navbar/Navbar';
import React, { ReactNode } from 'react';

const layout = ({children}:{children:ReactNode}) => {
    return (

        <div>
            <Navbar/>
        <div className='max-w-7xl mx-auto'>
           {children}
        </div>
        </div>
    );
};

export default layout;