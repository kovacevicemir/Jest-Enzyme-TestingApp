import React from "react";
import { mount } from "enzyme";
import moxios from 'moxios'
import Root from "Root";
import App from "components/App";

beforeEach(()=>{
    // intercept any call from axios - stop them
    moxios.install()
    //watch for this request, 2nd arg is returned as fake res.
    moxios.stubRequest('http://my-json-server.typicode.com/typicode/demo/comments',{
        status:200,
        response:[{body:"com1#",id:1},{body:"com2#",id:2}]
    })    
})

afterEach(()=>{
    moxios.uninstall(); //clean up
})

//#Integration test:
it("can fetch a list of comments and display them", (done) => {
  //attempt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  //find the fetch comments button and click it
  wrapped.find('.fetch-comments-button').simulate('click');

  //Make pause, give moxios some time to kick in
  moxios.wait(() => {
    //update component
    wrapped.update();

    //expect to find a list of comments
    expect(wrapped.find('li').length).toEqual(2);
    
    //let jest know that we are done.
    done();

    wrapped.unmount(); //clean up
  });
});
