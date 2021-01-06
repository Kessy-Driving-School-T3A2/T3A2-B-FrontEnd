import Contact from "../../../components/pages/Contact";

import { shallow } from "enzyme";

describe("Contact", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Contact />);
    // console.log(wrapper.debug());
  });
  test("renders page header", () => {
    expect(wrapper.find("h1").get(0).props.children).toBe(
      "Contact Keesy Driving School"
    );
  });
  test("renders contact description", () => {
    expect(wrapper.find("p").get(0).props.children).toBe(
      "Please call us on 0419 421 848 to book a lesson. Otherwise complete the form below and we’ll be in touch shortly. Please complete all fields."
    );
  });
  test("renders the address of this service", () => {
    expect(wrapper.find("p").get(1).props.children).toBe(
      "Our office is located in Berwick. We service Dandenong, Pakenham and surrounding areas."
    );
  });
  test("renders the phone number of this service", () => {
    expect(wrapper.find("p").get(2).props.children).toBe("0419 421 848");
  });
  test("renders the email address of this service", () => {
    expect(wrapper.find("p").get(3).props.children).toBe(
      "info@keesydrivingschool.com.au"
    );
  });
  test("renders business hours of this service", () => {
    expect(wrapper.find("li").get(0).props.children).toBe("Mon–Wed: 7am – 9pm");
  });
  test("renders business hours of this service", () => {
    expect(wrapper.find("li").get(1).props.children).toBe("Thu: 7am – 3pm");
  });
  test("renders business hours of this service", () => {
    expect(wrapper.find("li").get(2).props.children).toBe("Fri: 7am – 9pm");
  });
  test("renders business hours of this service", () => {
    expect(wrapper.find("li").get(3).props.children).toBe("Sat: 8am – 2pm");
  });
  test("renders business hours of this service", () => {
    expect(wrapper.find("li").get(4).props.children).toBe("Sun: Closed");
  });
});
