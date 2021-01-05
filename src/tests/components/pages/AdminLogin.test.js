import AdminLogin from "../../../components/pages/AdminLogin";

import { shallow } from "enzyme";

describe("Admin login", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AdminLogin />);
    // console.log(wrapper.debug());
  });
  test("renders page header", () => {
    expect(wrapper.find("h1").get(0).props.children).toBe("AdminLogin");
  });
  test("renders page header", () => {
    expect(wrapper.find("h2").get(0).props.children).toBe(
      "Warning! This login is strictly for admin privilidge only, it is unrequired that anyone looking to employ Kessy Driving Services need not attempt to login"
    );
  });
  test("renders navigation bars link to About Us", () => {
    expect(wrapper.find("button").get(0).props.children).toBe("Submit");
    // expect(wrapper.find("button").get(0).props.to).toBe("/adminPrice");
  });
});
