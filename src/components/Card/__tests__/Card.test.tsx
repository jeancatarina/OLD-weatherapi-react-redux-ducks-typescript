import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test("hello world", () => {
	const wrapper = mount(<p>Hello Jest!</p>);
	expect(wrapper.text()).toMatch("Hello Jest!");
});
