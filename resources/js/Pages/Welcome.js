import React from 'react';
import Layout from '../Layouts/Layout';

const Welcome = () => {
    return <div>Welcome</div>
}

Welcome.layout = page => <Layout children={page} />

export default Welcome;