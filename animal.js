class State {
	constructor(timezone, capital, statebird, state){
		this.timeZone = timezone,
		this.capital = capital,
		this.stateBird = statebird,
		this.state = state
	}
}

let oneState = new State ("East Coast", "Albany", "Pigeon", "New York");
console.log(oneState);

let twoState = new State ("Hawaiian", "Honolulu", "Humuhumunumunumuapua'a", "Hawaii");
console.log(twoState);

let threeState = new State ();
console.log(threeState);
