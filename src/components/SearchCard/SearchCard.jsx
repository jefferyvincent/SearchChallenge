import React from 'react';
import { 
  SearchCard, 
  CardBody, 
  CardTextHolder, 
  CardTextHolderInner,
  CardTextBody,
  CardTextHeader,
  CardTextContent,
  Age,
  PhotoCount,
  PhotoCountHolder,
  Avatar
} from './SearchCard.styles';

export default class Search extends React.PureComponent {
  render() {
    const { id, photoUrl = '', handle = '', location = '', age = 99, photoCount = 0 } = this.props;

    return (
      <SearchCard to={`/profile/${id}`}>
        <CardBody>
          <Avatar> 
            <img src={photoUrl} alt="potential date"></img>
            <CardTextHolder>
              <CardTextHolderInner>
                <CardTextBody>
                  <CardTextHeader>
                    {handle}
                  </CardTextHeader>
                  <CardTextContent>
                    <Age>
                      <span>{location ? `${age} • ${location}` : age}</span>
                    </Age>
                    <PhotoCount>
                      {photoCount > 1 && (
                        <PhotoCountHolder>
                          <span>{photoCount}</span>
                        </PhotoCountHolder>
                      )}
                    </PhotoCount>
                  </CardTextContent>
                </CardTextBody>
              </CardTextHolderInner>
            </CardTextHolder>
          </Avatar>
        </CardBody>
      </SearchCard>
    );
  }
}
