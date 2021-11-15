import React from "react";
import { ProfileContext } from './ProfilesContextProvider';
import { getUserAllProfiles } from '../util/api'
import SearchPage from 'pages/SearchPage/SearchPage';
import ProfilePage from "pages/ProfilePage";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class ProfileRouting extends React.Component {
    static contextType = ProfileContext;
    componentDidMount() {
        getUserAllProfiles().then((data) => {
          this.context.dispatch({ type: 'loadData', payload: data });
        })
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <SearchPage />
                    </Route>
                    <Route path="/profile/:pid">
                        <ProfilePage />
                    </Route>
                </Switch>
            </Router>
        )
    } 
}

export default ProfileRouting;