import colors from "../../styles/colors";

const textAlignStyle = {
	display: "flex",
	flexDirection: "column" as const,
	justifyContent: "center",
	textAlign: "center" as const,
	fontFamily: "Helvetica, Arial"
};

const defaultCardStyle = {
	backgroundColor: colors.white,
	width: "250px",
	boxShadow: `0px 0px 3px ${colors.boxShadow}`,
	marginBottom: "30px",
	marginRight: "50px"
};

export const mediumStyle = {
	...defaultCardStyle,
	...{
		height: "225px"
	}
};

export const largeStyle = {
	...defaultCardStyle,
	...{
		height: "270px"
	}
};

export const cardStyle = [mediumStyle, largeStyle];

export const headerStyle = {
	...textAlignStyle,
	...{
		height: "42px",
		backgroundColor: colors.white,
		borderBottom: `1px solid ${colors.divider}`,
		color: colors.darkerGray,
		fontSize: "18px"
	}
};

export const sectionStyle = {
	...textAlignStyle,
	...{
		height: "138px",
		backgroundColor: colors.white,
		textAlign: "center" as const
	}
};

const footerHeight: { [key: number]: string } = ["42px", "87px"];

export const getFooterStyle = (size: number) => ({
	...textAlignStyle,
	...{
		height: footerHeight[size],
		backgroundColor: colors.cardFooter,
		textAlign: "center" as const
	}
});

const temperatureColor: { [key: string]: {} } = {
	Blue: colors.blueYoung,
	Orange: colors.orangeYoung,
	Red: colors.redYoung
};

export const getTemperature = (color: string) => ({
	fontSize: "90px",
	color: temperatureColor[color] as string
});

export const degreeStyle = {
	display: "inline-block",
	fontSize: "38px",
	verticalAlign: "super"
};
