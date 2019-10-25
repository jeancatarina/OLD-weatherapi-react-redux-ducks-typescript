import React from "react";
import Enzyme, { mount, ReactWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "../Card";
import { expect } from "chai";
import { Cities, Size } from "../../CardGroup/enums";

Enzyme.configure({ adapter: new Adapter() });

const weatherDataNuukMock = {
	main: {
		temp: 3,
		pressure: 1017,
		humidity: 60
	},
	sys: {
		country: "GL"
	},
	name: "Nuuk",
	updatedAt: "1:58:29 AM",
	date: "2019-10-25T04:58:29.919Z"
};

const weatherDataUrubiciMock = {
	main: {
		temp: 15,
		pressure: 1017,
		humidity: 60
	},
	sys: {
		country: "BR"
	},
	name: "Urubici",
	updatedAt: "1:58:29 AM",
	date: "2019-10-25T04:58:29.919Z"
};

const weatherDataNairobiMock = {
	main: {
		temp: 35,
		pressure: 1017,
		humidity: 60
	},
	sys: {
		country: "KE"
	},
	name: "Nairobi",
	updatedAt: "1:58:29 AM",
	date: "2019-10-25T04:58:29.919Z"
};

describe("Card tests", () => {
	let wrapper: ReactWrapper;
	const spy = {
		fetchData: jest.fn()
	};

	describe("size medium", () => {
		const mountWrapper = (extraProps?: object) =>
			mount(
				<Card
					fetchData={spy.fetchData}
					city={Cities.Nuuk}
					size={Size.Medium}
				/>
			);

		const unmountWrapper = () =>
			wrapper && wrapper.length && wrapper.unmount();

		const initialize = (extraProps?: object) => {
			unmountWrapper();

			wrapper = mountWrapper(extraProps);
		};

		describe("rendering tests", () => {
			beforeEach(() => {
				initialize();
			});

			afterEach(() => {
				unmountWrapper();
			});

			it("should render Card", () => {
				expect(wrapper.find(Card)).to.have.length(1);
			});

			it("should render header", () => {
				expect(wrapper.find("header").text()).to.be.equal(Cities.Nuuk);
			});

			it("should render loading", () => {
				wrapper.setProps({
					loading: true,
					weatherData: undefined,
					loadDataHasError: true
				});

				expect(wrapper.find("#loadingContent")).to.have.length(1);
			});

			it("should render error content", () => {
				wrapper.setProps({
					loading: false,
					weatherData: undefined,
					loadDataHasError: true
				});

				expect(wrapper.find("#loadingContent")).to.have.length(0);
				expect(wrapper.find("Button").text()).to.be.equal("Try Again");
			});
		});

		describe('behaviors', () => {
			beforeEach(() => {
				initialize();
			});

			afterEach(() => {
				unmountWrapper();
			});

			it("should render temperature with blue color with 3º", () => {
				const blue = "rgb(105, 163, 255)",
					temperature = wrapper.find("#sectionBody > div").getDOMNode() as HTMLElement;

				wrapper.setProps({
					loading: false,
					weatherData: weatherDataNuukMock,
					loadDataHasError: false
				});

				wrapper.update();
				expect(temperature.style["color"]).to.be.equal(blue);
			});

			it("should render temperature with orange color with 15º", () => {
				const orange = "rgb(255, 150, 50)",
					temperature = wrapper.find("#sectionBody > div").getDOMNode() as HTMLElement;

				wrapper.setProps({
					loading: false,
					weatherData: weatherDataUrubiciMock,
					loadDataHasError: false
				});

				wrapper.update();
				expect(temperature.style["color"]).to.be.equal(orange);
			});

			it("should render temperature with red color with 35º", () => {
				const blue = "rgb(105, 163, 255)",
					temperature = wrapper.find("#sectionBody > div").getDOMNode() as HTMLElement;

				wrapper.setProps({
					loading: false,
					weatherData: weatherDataNairobiMock,
					loadDataHasError: false
				});

				wrapper.update();
				expect(temperature.style["color"]).to.be.equal(blue);
			});
		})
		
	});
});
