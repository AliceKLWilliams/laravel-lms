import Header from '@/Components/Header';
import React from 'react';

const Layout = ({children}) => {
    return (
        <>
           <Header />

            <main>
                {children}
            </main>
        </>
    )
}

export default Layout;