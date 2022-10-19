import { ItemList } from "../item-list/Item-list";
import ItemData from "../items-data/Item-data";
import { ApiResources } from "../api-resurses/Api-Resurs";

const myApi = new ApiResources();
const { getAllPeople, getPlanets, getSpecies } = myApi;


const PersonList = ItemData(getAllPeople, ItemList);
const PlanetList = ItemData(getPlanets, ItemList);
const SpecieList = ItemData(getSpecies, ItemList);

export { PersonList, PlanetList, SpecieList };