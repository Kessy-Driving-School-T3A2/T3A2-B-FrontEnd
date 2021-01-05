import Bottombanner from "../../components/Bottombanner";

import { shallow } from "enzyme";

describe("Bottom Banner", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Bottombanner />);
  });
  test("renders the text", () => {
    expect(wrapper.find("p").get(0).props.children).toBe(
      "To Book Your Lesson Call"
    );
  });
  test("renders the text", () => {
    expect(wrapper.find("p").get(1).props.children).toBe(
      "Kessy Driving School"
    );
  });
  test("renders the text", () => {
    expect(wrapper.find("p").get(2).props.children).toBe("0419 421 848");
  });
});
