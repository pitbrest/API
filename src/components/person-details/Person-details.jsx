import React, { Component } from 'react';
import { ApiResources } from '../api-resurses/Api-Resurs';
import { Loading } from '../loading/Loading';
import './Person-details.css';


class PersonDetails extends Component {

  state = {
    person: null
  };

  myApi = new ApiResources();

  updatePerson = () => {
    const selectedPersonId = this.props.selectedPersonId;

    if (!selectedPersonId) {
      return;
    }

    this.myApi.getPerson(selectedPersonId)
      .then(person => {
        this.setState({
          person: person
        });
      });

  };

  componentDidMount() {
    this.updatePerson();
  }
  componentDidUpdate(prevProps) {
    if (this.props.selectedPersonId !== prevProps.selectedPersonId) {
      this.updatePerson();
    }
  }

  render() {

    if (!this.state.person) {
      return <Loading />;
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.person;

    return (
      <div className='person-container'>
        <img className='person-img' src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt='person-img' />
        <div className='personInfo-container'>
          <h3 className="person-name">{name}</h3>
          <div className="person-info">{gender}</div>
          <div className="person-info">{birthYear}</div>
          <div className="person-info">{eyeColor}</div>
        </div>
      </div>
    );
  }
}



export { PersonDetails };