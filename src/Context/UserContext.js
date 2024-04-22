import React from 'react'

const UserContext = React.createContext()


export default UserContext;

// Note : once context is create we need the provider as well so this is how we provider is set 
// <UserContext>
//     <Login />
//     <Data />
//     <Card />
// </UserContext> context provider example 
// Note: this is how we create userContext Provider by creating as seprate components 
