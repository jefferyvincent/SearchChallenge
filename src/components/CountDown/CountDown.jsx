import React, {useContext, useEffect, useState } from 'react';
import MinimalButton from 'components/MinimalButton/MinimalButton';
import { ProfileContext } from 'components/ProfilesContextProvider';
import { getUserAllProfiles } from './../../util/api'

export const CountDown = () => {
    const context = useContext(ProfileContext);
    const [seconds, setSeconds] = React.useState(10);
    const [isActive, setIsActive] = useState(true);

    const toggle = (e) => {
        if (isActive) {
            setSeconds(10);
            setIsActive(false);
        } else {
            setSeconds(10);
            setIsActive(true);
        }   
    }

    useEffect(() => {
        let interval = null;
        const refreshData = () => {
            getUserAllProfiles().then((data) => {
                context.dispatch({ type: 'loadData', payload: data.sort(() => Math.random() - 0.5) });
                setSeconds(10);
            })
        }

        if (isActive) {
            if (seconds === 0) {
                refreshData();
            }
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
        
    }, [isActive, seconds, context]);

    return <MinimalButton onClick={toggle}>
        <div>{seconds}</div>
    </MinimalButton>
}
