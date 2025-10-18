import React from 'react'
import { useState, useEffect } from 'react'


function UseOnline() {
    const [isOnlineState, setIsOnlineState] = useState(navigator.onLine);

    useEffect(function(){
        window.addEventListener('online', function(){
            setIsOnlineState(true);
        })
        window.addEventListener('offline', function(){
            setIsOnlineState(false);
        })

        // Cleanup function to remove event listeners
        return function(){
            window.removeEventListener('online', function(){
                setIsOnlineState(true);
            })
            window.removeEventListener('offline', function(){
                setIsOnlineState(false);
            })
        }

    }, []);

    return isOnlineState;
}

export default UseOnline