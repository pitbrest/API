import { ItemDetails } from '../item-details/Item-details';
import { ContentField } from '../item-details/Content-field';

import { ApiResources } from "../api-resurses/Api-Resurs";

const myApi = new ApiResources();
const { getPerson, getPlanet, getSpecie,
  getPersonImg, getSpecieImg, getPlanetImg
} = myApi;


const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails
      selectedItemId={itemId}
      getImageUrl={getPersonImg}
      getData={getPerson}
    >
      <ContentField
        field='gender'
        label='Gender'
      />
      <ContentField
        field='birthYear'
        label='Birth Year'
      />
      <ContentField
        field='eyeColor'
        label='Eye Color'
      />
    </ItemDetails>
  );
};

const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      selectedItemId={itemId}
      getImageUrl={getPlanetImg}
      getData={getPlanet}
    >
      <ContentField
        field='population'
        label='Population'
      />
      <ContentField
        field='rotationPeriod'
        label='Rotation Period'
      />
      <ContentField
        field='diameter'
        label='Diameter'
      />
    </ItemDetails>
  );

};

const SpecieDetails = ({ itemId }) => {
  return (
    <ItemDetails
      selectedItemId={itemId}
      getImageUrl={getSpecieImg}
      getData={getSpecie}
    >
      <ContentField
        field='classification'
        label='Classification'
      />
      <ContentField
        field='designation'
        label='Designation'
      />
      <ContentField
        field='lifespan'
        label='Lifespan'
      />
    </ItemDetails>
  );
};

export { PersonDetails, PlanetDetails, SpecieDetails };