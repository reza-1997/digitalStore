
"use client";

import { useState, type ReactNode } from "react";
import { AppStore, makeStore } from "./store";
import { Provider } from 'react-redux';

interface ProvidersProps {
    children: ReactNode;
}

export default function Providers({
    children,
}: ProvidersProps) {
    const [store] = useState<AppStore>(makeStore);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}
