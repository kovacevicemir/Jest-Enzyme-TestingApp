import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import App from "components/App";

it("can fetch a list of comments and display them", () => {
  //attempt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  //find the fetch comments button and click it
  wrapped.find('.fetch-comments-button').simulate('click');

  //expect to find a list of comments
  expect(wrapped.find('li').length).toEqual(2);
});
