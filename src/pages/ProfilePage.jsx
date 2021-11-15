import React, {useContext} from "react";
import { ProfileContext } from '../components/ProfilesContextProvider';
import {useParams} from 'react-router-dom';
import Header from '../components/Header/Header';
import { ProfileFull } from "components/ProfileFull/ProfileFull";

const ProfilePage = () => {
    const { profiles } = useContext(ProfileContext);
    let { pid } = useParams();
    // loading
    if (!profiles) {
        return <h1>Loading...</h1>
    }
    const profile = profiles.filter(x => x.id === parseInt(pid, 10));
    // empty profiles array
    if (profile.length === 0) {
        return null
    }
    return <>
        <Header />
        { 
            profile.map((user) => (
                <ProfileFull key={user.id} data={user} />
            ))
        }
    </>
}
export default ProfilePage;