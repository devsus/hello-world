//context provides way to pass data through the component tree without having to pass props down manually at entry level
//1. Create the context
//2. Provide a context value
//3. Consume the context value

import React from "react";

const UserContext = React.createContext("Devendra");
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

export default UserContext;
