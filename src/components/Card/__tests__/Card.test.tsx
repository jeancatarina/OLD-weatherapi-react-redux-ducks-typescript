import React from "react";
import Enzyme, { mount, ReactWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "../Card";
import { expect } from "chai";
import { Cities, Size } from "../../CardGroup/enums";

Enzyme.configure({ adapter: new Adapter() });

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
			beforeAll(() => {
				initialize();
			});

			afterAll(() => {
				unmountWrapper();
			});

			it("should render Card", () => {
				expect(wrapper.find(Card)).to.have.length(1);
			});
		});
	});
});
