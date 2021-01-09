import AdminControlNav from "../../components/AdminControlNav";

import { shallow } from "enzyme";

describe("Admin Control navigation", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AdminControlNav />);
  });
  test("renders admin Faq link", () => {
    expect(wrapper.find(".admin-single-button").get(0).props.children).toBe(
      "Admin FAQs"
    );
    expect(wrapper.find(".admin-single-button").get(0).props.to).toBe(
      "/FAQ/admin"
    );
  });
  test("renders admin prices & packages link", () => {
    expect(wrapper.find(".admin-single-button").get(1).props.children).toBe(
      "Admin Prices & Packages"
    );
    expect(wrapper.find(".admin-single-button").get(1).props.to).toBe(
      "/Prices/admin"
    );
  });
  test("renders admin logout link", () => {
    expect(wrapper.find(".admin-single-button").get(2).props.children).toBe(
      "Log out"
    );
    expect(wrapper.find(".admin-single-button").get(2).props.to).toBe("/");
  });
});
