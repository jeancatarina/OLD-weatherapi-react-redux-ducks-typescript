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

const BodyContainer: React.FC = (props) => {
	return (
		<section style={sectionStlye}>
			<CardGroup />
		</section>
	);
};

export default BodyContainer;
