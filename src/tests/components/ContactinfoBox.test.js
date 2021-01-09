import ContactinfoBox from "../../components/ContactinfoBox";

import { shallow } from "enzyme";

describe("ContactinfoBox", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ContactinfoBox />);
  });
  test("renders the name of the school", () => {
    expect(wrapper.find("h3").get(0).props.children).toBe(
      "Kessy Driving School"
    );
  });
  test("renders the office location", () => {
    expect(wrapper.find("li").get(0).props.children).toBe("Office Location");
  });
  test("renders the number", () => {
    expect(wrapper.find("li").get(1).props.children).toBe("Number");
  });
  test("renders the email address", () => {
    expect(wrapper.find("li").get(2).props.children).toBe(
      "Info@kessydrivingschool.com"
    );
  });

  test("renders button link to Contact Us page", () => {
    expect(wrapper.find(".sideContactBox").text()).toBe("Book A Lesson Now");
    expect(wrapper.find(".sideContactBox").get(0).props.to).toBe("/contact");
  });
});
