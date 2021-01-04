import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";

import { shallow } from "enzyme";

describe("Header", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
    // console.log(wrapper.debug());
  });
  test("renders admin login link", () => {
    expect(wrapper.find(".item").get(0).props.children).toBe("Admin Login");
    expect(wrapper.find(".item").get(0).props.to).toBe("/adminLogin");
  });

  // test("renders button with text of 'button'", () => {
  //   expect(wrapper.find("#btn").text()).toBe("button");
  // });
});
