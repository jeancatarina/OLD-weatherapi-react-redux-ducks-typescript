import React from "react";
import Card from "../Card/Card";
import "./style.scss";

enum Cities {
	Nuuk = "Nuuk, GL",
	Urubici = "Urubici, BR",
	Nairobi = "Nairobi, KE"
}

enum Size {
	Medium,
	Large
}

interface Props {
	fetchData: Function;
	weatherData?: {
		main: {
			temp: number
		}
	}
}

const CardGroup: React.FC<Props> = (props: Props) => {
	const { fetchData, weatherData } = props;

	return (
		<article id="CardGroup">
			<Card
				fetchData={fetchData}
				weatherData={weatherData}
				city={Cities.Nuuk}
				size={Size.Medium}
			/>
			<Card
				fetchData={fetchData}
				weatherData={weatherData}
				city={Cities.Urubici}
				size={Size.Large}
			/>
			<Card
				fetchData={fetchData}
				weatherData={weatherData}
				city={Cities.Nairobi}
				size={Size.Medium}
			/>
		</article>
	);
};

export default CardGroup;
