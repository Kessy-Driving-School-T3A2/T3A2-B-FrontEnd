import Footer from "../../components/Footer";

import { shallow } from "enzyme";

describe("Footer", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
    // console.log(wrapper.debug());
  });
  test("renders address", () => {
    expect(wrapper.find("p").get(0).props.children).toBe(
      "Office located in Berwick - We service Dandenong, Pakenham and surrounding areas."
    );
  });
  test("renders phone number", () => {
    expect(wrapper.find("p").get(1).props.children).toBe("0419 421 848");
  });
  test("renders info link", () => {
    expect(wrapper.find("p").get(2).props.children).toBe(
      "info@keesydrivingschool.com.au"
    );
  });
  test("renders copyright", () => {
    expect(wrapper.find("p").get(3).props.children).toBe(
      "Developed By Syeda & Anthony | 2021 | MERN"
    );
  });
});
