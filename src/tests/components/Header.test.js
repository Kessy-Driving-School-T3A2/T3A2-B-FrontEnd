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
    expect(wrapper.find(".item").get(0).props.to).toBe("/Admin/login");
  });
  test("renders Home on clicking logo", () => {
    expect(wrapper.find(".item").get(1).props.children).toStrictEqual(
      <img alt="logo" src="logo.png" />
    );
    expect(wrapper.find(".item").get(1).props.to).toBe("/");
  });
  test("renders navigation bars link to Home", () => {
    expect(wrapper.find(".item").get(2).props.children).toBe("Home");
    expect(wrapper.find(".item").get(2).props.to).toBe("/");
  });
  test("renders navigation bars link to About Us", () => {
    expect(wrapper.find(".item").get(3).props.children).toBe("About Us");
    expect(wrapper.find(".item").get(3).props.to).toBe("/aboutUs");
  });
  test("renders navigation bars link to Prices & Packages", () => {
    expect(wrapper.find(".item").get(4).props.children).toBe(
      "Prices & packages"
    );
    expect(wrapper.find(".item").get(4).props.to).toBe("/prices");
  });
  test("renders navigation bars link to FAQs", () => {
    expect(wrapper.find(".item").get(5).props.children).toBe("FAQs");
    expect(wrapper.find(".item").get(5).props.to).toBe("/faqs");
  });
  test("renders navigation bars link to Reviews", () => {
    expect(wrapper.find(".item").get(6).props.children).toBe("Reviews");
    expect(wrapper.find(".item").get(6).props.to).toBe("/reviews");
  });
  test("renders navigation bars link to Contact Us", () => {
    expect(wrapper.find(".item").get(7).props.children).toBe("Contact Us");
    expect(wrapper.find(".item").get(7).props.to).toBe("/contact");
  });
});
