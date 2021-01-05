import Home from "../../../components/pages/Home";

import { shallow } from "enzyme";

describe("Home", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });
  test("renders the name of the school", () => {
    expect(wrapper.find("h1").get(0).props.children).toBe(
      "Kessy Driving School"
    );
  });
  test("renders text welcome", () => {
    expect(wrapper.find("h2").get(0).props.children).toBe("Welcome");
  });
  test("renders contact page when book button clicked", () => {
    expect(wrapper.find(".item").get(0).props.children).toBe("BOOK LESSON NOW");
    expect(wrapper.find(".item").get(0).props.to).toBe("/contact");
  });

  test("renders text", () => {
    expect(wrapper.find("h1").get(1).props.children).toBe("Why Choose Us");
  });
  test("renders each specifications", () => {
    expect(wrapper.find("p").get(0).props.children).toBe(
      "Experiences & Qualified Instructor"
    );
  });
  test("renders each specifications", () => {
    expect(wrapper.find("p").get(1).props.children).toBe("Prices & Packages");
  });
  test("renders each specifications", () => {
    expect(wrapper.find("p").get(2).props.children).toBe("Manual & Automatic");
  });
  test("renders each specifications", () => {
    expect(wrapper.find("p").get(3).props.children).toBe(
      "Male & Female Instructor"
    );
  });
  test("renders each specifications", () => {
    expect(wrapper.find("p").get(4).props.children).toBe("New Drivers");
  });
  test("renders each specifications", () => {
    expect(wrapper.find("p").get(5).props.children).toBe(
      "International Drivers"
    );
  });
});
