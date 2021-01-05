import AboutUs from "../../../components/pages/AboutUs";

import { shallow } from "enzyme";

describe("AboutUs", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AboutUs />);
  });
  test("renders page heading", () => {
    expect(wrapper.find("h1").get(0).props.children).toBe("About Us");
  });
  test("renders contact page on button click", () => {
    expect(wrapper.find(".textLink").get(0).props.children).toBe(
      "Contact Keesy Driving School to book your first lesson today."
    );
    expect(wrapper.find(".textLink").get(0).props.to).toBe("/contact");
  });
  // test("renders text welcome", () => {
  //   expect(wrapper.find("h2").get(0).props.children).toBe("Welcome");
  // });
});
