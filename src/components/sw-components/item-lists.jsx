import React from 'react';
import { ItemList } from '../item-list/Item-list';
import { ItemsData } from '../items-data/Item-data';
import { ApiResources } from '../api-resurses/Api-Resurs';

const myApi = new ApiResources();
const { getAllPeople, getPlanets, getSpecies } = myApi;

const addChildFunc = (WrappedComponent, childFn) => {
	return (props) => {
		return <WrappedComponent {...props}>{childFn}</WrappedComponent>;
	};
};

const ListWithChild = addChildFunc(ItemList, (item) => item.name);

const PersonList = ItemsData(getAllPeople, ListWithChild);

const PlanetList = ItemsData(getPlanets, ItemList);
const SpecieList = ItemsData(getSpecies, ItemList);

export { PersonList, PlanetList, SpecieList };
