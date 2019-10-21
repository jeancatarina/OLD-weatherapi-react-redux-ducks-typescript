import React from "react";
import colors from "../../styles/colors";
import CardGroup from "../CardGroup/CardGroup";

const sectionStlye = {
	backgroundColor: colors.appBackground,
	width: "100%",
	height: "800px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
};

interface Props {
	fetchData: Function,
	weatherData?: {
		main: {
			temp: number
		}
	}
}

const BodyContainer: React.FC<Props> = (props: Props) => {
	const { fetchData, weatherData } = props;

	return (
		<section style={sectionStlye}>
			<CardGroup fetchData={fetchData} weatherData={weatherData} />
		</section>
	);
};

export default BodyContainer;
