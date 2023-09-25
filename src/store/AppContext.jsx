<<<<<<< HEAD
import { createContext, useEffect, useState } from "react";
import getState from "./flux";
=======
import React, { createContext, useEffect, useState } from "react";
import getState from "./flux.js";

>>>>>>> secciónforo

export const Context = createContext(null);

const injectContext = PassedComponent => {

    const StoreWrapper = props => {

        const [state, setState] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: updateStore => setState({
                store: Object.assign(state.store, updateStore),
                actions: { ...state.actions }
            })
        }));

        useEffect(() => {
<<<<<<< HEAD
            // Call actions by default here
            // state.actions.getSomeData()

=======
            state.actions.getUser()
>>>>>>> secciónforo
        }, [])

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        )
    }

    return StoreWrapper;

}

export default injectContext;