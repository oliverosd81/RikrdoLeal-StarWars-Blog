const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {},
		actions: {
			
			getPeople: async () => {

				const getPeopleDetail = getActions().getPeopleDetail;

				const people = await fetch("https://swapi.tech/api/people");
				const peopleJson = await people.json();
				console.log(peopleJson);
				setStore({ people: peopleJson.results})
				getPeopleDetail();

			},

			getPeopleDetail: async () => {

				for (let i = 1; i <= 10; i++) {
					const peopleDetail = await fetch(`https://swapi.tech/api/people/${i}`);
					const peopleDetailJson = await peopleDetail.json();
					setStore({ peopleDetail: peopleDetailJson.result});
				}
			}

		}
	};
};

export default getState;
