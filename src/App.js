import { ApiResources } from './components/Api-Resurs';

function App() {
	const myRes = new ApiResources();
	myRes.getAllPeople().then((data) => console.log(data));
	return <div className='App'>hello</div>;
}

export default App;
