import React, {useEffect} from "react";
import Header from "../Header/Header";
import BodyContainer from "../BodyContainer/BodyContainer";

interface Props {
	fetchData: Function,
	weatherData?: {
		main: {
			temp: number
		}
	}
}

const HomePage: React.FC<Props> = (props) => {
	const { fetchData, weatherData } = props;
	
	return (
		<>
			<Header />
			<BodyContainer fetchData={fetchData} weatherData={weatherData} />
		</>
	);
};

export default HomePage;
