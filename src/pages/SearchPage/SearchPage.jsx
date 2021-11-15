import React from 'react';
import { ProfileContext } from '../../components/ProfilesContextProvider';
import MinimalButton from '../../components/MinimalButton/MinimalButton';
import Header from '../../components/Header/Header';
import SearchCard from '../../components/SearchCard/SearchCard';
import { CountDown } from 'components/CountDown/CountDown';
import { ContentContainer, Main, Navigation } from './SearchPage.styles'

class SearchPage extends React.Component {
  static contextType = ProfileContext;

  handleSortAscending = () => {
    this.context.dispatch({ type: 'ascending' });
  };

  handleSortDescending = () => {
    this.context.dispatch({ type: 'descending' });
  };

  render() {
    const { profiles = [] } = this.context;

    return (
      <React.Fragment>
        <Header />
        <Main>
          <Navigation>
            
            <CountDown />

            <MinimalButton disabled>
              <img src="filter.svg" width={22} alt="filter" />
            </MinimalButton>

            <MinimalButton onClick={this.handleSortAscending}>
              <img src="./ascending.svg" width={22} alt="Sort ascending" />
            </MinimalButton>

            <MinimalButton onClick={this.handleSortDescending}>
              <img src="./descending.svg" width={22} alt="Sort descending" />
            </MinimalButton>
          </Navigation>

          <ContentContainer>
            {profiles.map((profile) => (
              <SearchCard
                key={profile.id}
                id={profile.id}
                photoUrl={profile.photoUrl}
                handle={profile.handle}
                location={profile.location}
                age={profile.age}
                photoCount={profile.photoCount}
              />
            ))}
          </ContentContainer>
        </Main>
      </React.Fragment>
    );
  }
}

export default SearchPage;
