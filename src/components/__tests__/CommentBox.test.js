import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

describe("the text area", () => {
  beforeEach(() => {
    //Find text area and simulate new value input
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" },
    });

    //force component to update (setState)
    wrapped.update();
  });

  it("has a text area that users can type in", () => {
    //check if updated value is correct
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("has text area, user can type in and submit", () => {
    //check if updated value is correct
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");

    //submit the form
    wrapped.find("form").simulate("submit");

    //check if textarea is clear
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
