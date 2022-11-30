import { useState, useEffect, useCallback } from 'react'

export const useOnline = () => {
    const [online, setOnline] = useState(navigator.onLine)

    const onOnline = useCallback(() => setOnline(true), [])
    const onOffline = useCallback(() => setOnline(false), [])

    useEffect(() => {
        window.addEventListener('online', onOnline)
        window.addEventListener('offline', onOffline)
        return () => {
            window.removeEventListener('online', onOnline)
            window.removeEventListener('offline', onOffline)
        }
    }, [])

    return online
}

