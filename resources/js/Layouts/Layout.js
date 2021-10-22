import Header from '@/Components/Header';
import React from 'react';

const Layout = ({children}) => {
    return (
        <>
           <Header />

            <main className="p-4">
                <div className="max-w-5xl mx-auto">
                    {children}
                </div>
            </main>
        </>
    )
}

export default Layout;