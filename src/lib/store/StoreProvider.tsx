
"use client";

import { useRef, type ReactNode } from "react";
import { AppStore, makeStore } from "./store";
import { Provider } from 'react-redux';

interface ProvidersProps {
    children: ReactNode;
}

export default function Providers({
    children,
}: ProvidersProps) {
    const storeRef = useRef<AppStore | null>(null);

    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    );
}
