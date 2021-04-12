import React from 'react';

const context = React.createContext({
    auth: false,
    user:{}
});

export default context;