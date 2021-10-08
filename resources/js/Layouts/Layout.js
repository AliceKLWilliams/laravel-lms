import React from 'react';

const Layout = ({children}) => {
    return (
        <>
            <header>
                Header
            </header>

            <main>
                {children}
            </main>
        </>
    )
}

export default Layout;