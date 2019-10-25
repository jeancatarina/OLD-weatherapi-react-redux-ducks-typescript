import React from "react";
import { Props } from "./interfaces";
import colors from "../../styles/colors";

const buttonStyle = {
	display: "inline-block",
	color: colors.darkerGray,
	verticalAlign: "middle",
	backgroundColor: "transparent",
	border: `2px solid ${colors.darkerGray}`,
	padding: ".375rem .75rem",
	fontSize: "16px",
	lineHeight: "1.5",
	borderRadius: "20px",
	cursor: "pointer"
};

const Button: React.FC<Props> = (props: Props): React.ReactElement => {
	const { onClick } = props;

	return (
		<button onClick={onClick.bind(undefined)} style={buttonStyle}>
			{props.children}
		</button>
	);
};

export default Button;
