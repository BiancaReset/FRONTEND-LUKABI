import React, { createContext, useEffect, useState } from "react";
import getState from "./flux.js";


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
            state.actions.getUser()
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