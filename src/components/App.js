import React, { useState,useEffect } from "react";
import "./../styles/App.css";


const states = [{
	name : "Madhya Pradesh",
	description:"Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history.",
	city :[{
		name : "Indore",
		description:"Indore is a city in west-central India. It’s known for the 7-story Rajwada Palace and the Lal Baag Palace, which date back to Indore’s 19th-century Holkar dynasty.",
		landmarks :[{
			name : "Mhow",
			description:"Dr. Ambedkar Nagar, commonly known as Mhow, is a cantonment in the Indore district in Madhya Pradesh state of India. It is located 23 kilometres south-west of Indore city, towards Mumbai on the old Mumbai-Agra Road.",				
		},{
			name : "Dewas",
			description:"Dewas is a city in the Malwa region of the Indian state of Madhya Pradesh. The municipality was formerly the seat of two princely states during the British Raj, Dewas Junior state and Dewas Senior state, ruled by the Puar clan of Maratha.",
		}]
	},{
		name : "Bhopal",
		description:"DBhopal is a city in the central Indian state of Madhya Pradesh. It's one of India’s greenest city. There are two main lakes, the Upper Lake and the Lower Lake.",
		landmarks :[{
			name : "MANIT",
			description:"Maulana Azad National Institute of Technology Bhopal is a public technical university located in Bhopal, Madhya Pradesh, India. It is part of a group of publicly funded institutions in India known as National Institutes of Technology. ",
		},{
			name: "Berasia",
			description:"Berasia is a landmark and a nagar palika in Bhopal district in the state of Madhya Pradesh, India. ",
		}]
	},{
		name : "Gwalior",
		description:"Gwalior is a city in the central Indian state of Madhya Pradesh. It's known for its palaces and temples, including the Sas Bahu Ka Mandir intricately carved Hindu temple. ",
		landmarks :[{
			name : "Ajaypur",
			description:"Little less known city Ajaypur.",
		}]
	}]
},{
	name : "Jharkhand",
	description:"Jharkhand is a state in eastern India. It's known for its waterfalls, the elegant Jain temples of Parasnath Hill and the elephants and tigers of Betla National Park.",
	city :[{
		name : "Dhanbad",
		description:"Dhanbad is the second-most populated city in the Indian state of Jharkhand. It ranks as the 33rd largest city in India and is the 42nd largest million-plus urban agglomeration in India. It is the 96th fastest growing urban area of the world by the City Mayors Foundation.",
		landmarks :[{
			name : "IIT(ISM) Dhanbad",
			description:"Indian Institute of Technology (Indian School of Mines) Dhanbad is a public technical and research university located in Dhanbad, India. It is an Institute of National Importance. IIT has 18 academic departments covering Engineering,",
		},{
			name : "Hirapur",
			description:"Hirapur is a census landmark in Balaghat district in the Indian state of Madhya Pradesh.",
		}]
	},{
		name : "Wasseypur",
		description:"Wasseypur is a neighbourhood in the city of Dhanbad in Dhanbad Sadar subdivision of Dhanbad district in the state of Jharkhand in India. ",
		landmarks :[{
			name : "Pandey muhalla",
			description:"Located behind the dhanbad junction is must visit place.",
		},{
			name : "MPI Hall",
			description:"Space for everyone",
		}]
	},{
		name : "Hazaribagh",
		description:"Hazaribagh is a city and a municipal corporation in Hazaribagh district in the Indian state of Jharkhand. It is the divisional headquarters of North Chotanagpur division.",
		landmarks :[{
			name : "Shaheed Nirmal Mahto Park",
			description:"Famous for its giant dinosaur structure",
		},{
			name : "Gandhi Maidan",
			description:"Ideal for conduction major events",
		}]
	}]
},{
	name : "Assam",
	description:"Assam is a state in northeastern India known for its wildlife, archeological sites and tea plantations. ",
	city :[{
		name : "Guwhati",
		description:"Guwahati is a sprawling city beside the Brahmaputra River in the northeast Indian state of Assam. It’s known for holy sites like the hilltop Kamakhya Temple,",
		landmarks :[{
			name : "Ganesh Guri",
			description:"Famous because of PVR city center.",
		},{
			name : "Kalyani Nagar",
			description:"located near famous Lakshmi Nagar",
		}]
	},{
		name : "dimapur",
		description:"Dimapur is a city in Nagaland, India. It is the most populous city of Nagaland and also the most densely populated city in the state with an estimated population of about 250,000.",
		landmarks :[{
			name : "City Tower",
			description:"Giant Tower standing by the road since history.",
		},{
			name : "Sunday Market",
			description:"Famous for its weekend Sale on all items.",
		}]
	},{
		name : "Tezpur",
		description:"Tezpur is a landmark and urban agglomeration in Sonitpur district, Assam state, India. Tezpur is located on the banks of the river Brahmaputra, 175 kilometres northeast of Guwahati, and is the largest of the north bank landmarks with a population exceeding 100,000 as per Metropolitan Census 2011.",
		landmarks :[{
			name : "Bamuni Hills",
			description:"Best location for photoshoots",
		},{
			name : "Bhujkhowa Bazar",
			description:"Central Market for Tezpur",
		}]
	}]
},{
	name : "Bihar",
	description:"Bihar is a state in East India, bordering Nepal. It is divided by the River Ganges, which floods its fertile plains. Important Buddhist pilgrimage sites include the Bodhi Tree in Bodhgaya's Mahabodhi Temple, under which the Buddha allegedly meditated.",
	city :[{
		name : "Patna",
		description:"Patna is an ancient city that sprawls along the south bank of the Ganges River in Bihar, northeast India.",
		landmarks :[{
			name : "Sonpur",
			description:"Sonpur is a city and sub-division in the Indian state of Bihar, situated on the banks of the River Gandak and Ganges River in the Saran District.",
		},{
			name : "Maner",
			description:"Maner also spelled Maner or Maner Sharif, is a satellite landmark in Patna Metropolitan Region, in the Patna district in the Indian state of Bihar. Maner Sharif lies 24 km west of Patna the capital of Bihar on National Highway 30.",
		}]
	},{
		name : "Gaya",
		description:"Gaya is a holy city beside the Falgu River, in the northeast Indian state of Bihar. It’s known for 18th-century Vishnupad Mandir, a riverside temple with an octagonal shrine. Close by, ancient Mangla Gauri Temple is set on a hilltop. ",
		landmarks :[{
			name : "Bakraur",
			description:"Bakraur, sometimes called Bakrour, is a village located slightly east of Bodh Gaya in the state of Bihar, India. It lies directly across the Phalgu River from the landmark of Bodh Gaya, where Gautama Buddha is said to have attained enlightenment.",
		},{
			name : "Barachatti",
			description:"Barachatti is a block in the Gaya district of Bihar, India. Barachatti contains 141 villages and 13 gram panchayat. Sarwan bazar is the biggest and Nimi is the smallest village of Barachatti. The total population in Barachatti sub-district is 142,534 according to the census during 2011 by Indian Government.",
		}]	
	},{
		name : "Darbhanga",
		description:"Darbhanga is a city and Municipal Corporation in the Indian state of Bihar. It is the 6th largest city of Bihar, only after Patna, Gaya, Bhagalpur, Muzaffarpur and Purnea. It is the headquarters of Darbhanga district and Darbhanga division and was the seat of the Raj Darbhanga and capital of the Mithila region.",
		landmarks :[{
			name : "Singhwara",
			description:"Famous for its Groundnut Market",
		},{
			name : "Jale",
			description:"Famous for its roasted seads market.",
		}]
	}]
}];









function App() {

	const [getState, setState] = useState("");
	const [getCity, setCity] = useState("");
	const [getLandmark, setLandmark] = useState("");
  
  
	const [getStateIndex, setStateIndex] = useState(0);
	const [getCityIndex, setCityIndex] = useState(0);
	const [getLandmarkIndex, setLandmarkIndex] = useState(0);
  
	const [state_title, set_state_title] = useState("");
	const [city_title, set_city_title] = useState("");
	const [landmark_title, set_landmark_title] = useState("");
  
	const [state_des, set_state_des] = useState("");
	const [city_des, set_city_des] = useState("");
	const [landmark_des, set_landmark_des] = useState("");
  
	useEffect(() => {
	  popStates();
	  popCity(getStateIndex);
	  popLandmark(getCityIndex, getStateIndex);
	  chaneTitle();
	  chaneDescription();
  
	}, [getStateIndex, getCityIndex,getLandmarkIndex]);
  
	function popStates(e) {
	  const stateList = states.map((item, index) => {
		return (
		  <option value={index}>{item.name}</option>
		)
	  });
	  setState(stateList);
	 
	}
	
	
	function chaneTitle(){
		const stateTitle = states[getStateIndex].name;
		const cityTitle =  states[getStateIndex].city[getCityIndex].name;
		const landmarkTitle = states[getStateIndex].city[getCityIndex].landmarks[getLandmarkIndex].name;
		set_state_title(stateTitle);
		set_city_title(cityTitle);
		set_landmark_title(landmarkTitle);
	}
  
	function chaneDescription(){
	  const stateDes = states[getStateIndex].description;
	  const cityDes =  states[getStateIndex].city[getCityIndex].description;
	  const landmarkDes = states[getStateIndex].city[getCityIndex].landmarks[getLandmarkIndex].description;
	  set_state_des(stateDes);
	  set_city_des(cityDes);
	  set_landmark_des(landmarkDes);
  }
  
	const stateChanged = (e) => {
	  const id = e.target.value;
	  setStateIndex(id);
	  setCityIndex(0);
	  popCity(getStateIndex);
	}
  
	const cityChanged = (e) => {
	  const id = e.target.value;
	  setCityIndex(id);
	  setLandmarkIndex(0);
	  popLandmark(getCityIndex, getStateIndex);
	}
	const landmarkChanged = (e) => {
	  const id = e.target.value;
	  setLandmarkIndex(id);
	  chaneTitle();
	  chaneDescription();
	}
	// console.log(getStateIndex);
  
	function popCity(StateIndex) {
	  const cityList = states[StateIndex].city.map((item, index) => {
		return (
		  <option value={index}>{item.name}</option>
		)
	  });
	  setCity(cityList);
	}
  
	function popLandmark(CityIndex, StateIndex) {
	  const landmarkList = states[StateIndex].city[CityIndex].landmarks.map((item, index) => {
		return (
		  <option value={index}>{item.name}</option>
		)
	  });
	  setLandmark(landmarkList);
	}
  
  
	return (
	  <div id="main">
	   States: <select id="state" onChange={stateChanged}>
		  {getState}
		</select>
  
	   Cities: <select id="city" onChange={cityChanged} >
		  {getCity}
		</select>
	   Towns: <select id="landmark" onChange={landmarkChanged}>
		  {getLandmark}
		</select>
  
		<div id="state-name">
		  <div id="state-title">{state_title}</div>
		  <div id="state-description">{state_des}</div>
		</div>
		<div id="city-name">
		  <div id="city-title">{city_title}</div>
		  <div id="city-description">{city_des}</div>
		</div>
		<div id="landmark-name">
		  <div id="landmark-title">{landmark_title}</div>
		  <div id="landmark-description">{landmark_des}</div>
		</div>
  
	  </div>
	)
  }


  export default App;














// const State = (props)=>{
// 	return (
// 		<>
// 			<option value={props.index} key={props.index}>{props.stateName.name}</option>
// 		</>
// 	)
// }

// const City = (props)=>{
// 	return (
// 		<>
// 			<option value={props.index} key={props.index}>{props.cityName.name}</option>
// 		</>
// 	)
// }

// const Town = (props)=>{
// 	return (
// 		<>
// 			<option value={props.index} key={props.index}>{props.townName.name}</option>
// 		</>
// 	)
// }



// function App() 
// {
// 	const [sat, setSat] = useState();
// 	const [cit, setCit] = useState();
// 	const [twn, setTwn] = useState();

// 	const updateState = (e)=>{
// 		//document.getElementById('state')
// 		setSat(state[1].value)
// 	}
// 	// Do not alter/remove main div
// 	return (
// 	<div id="main">
// 	{/* states */}
// 	<div>
// 		<span>States : </span>
// 		<select id='state' onChange={updateState}>
// 		{states.map((state,index)=>
// 			<State stateName={state} index={index}/>
// 		)}
// 		</select>
// 	</div>

// 	{/* cities */}
// 	<div>
// 		<span>Cities : </span>
// 		{/* <h2>citi : {sat}</h2> */}
// 		<select id='city'>
// 		{states[0].city.map((city,index)=>
// 			<City cityName ={city} index={index}/>
// 		)}
// 		</select>
// 	</div>


// 	{/* towns */}
// 	<div>
// 		<span>Towns : </span>
// 		<select id='landmark'>
// 		{states[0].city[0].landmarks.map((city,index)=>
// 			<Town townName ={city} index={index}/>
// 		)}
// 		</select>
// 	</div>


		
// 	</div>
// 	);
// }


// export default App;


