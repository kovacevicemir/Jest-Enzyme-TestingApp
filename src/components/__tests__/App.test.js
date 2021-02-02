import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

it('shows a comment box', ()=>{
    const wrapped = shallow(<App />);
    expect(wrapped.find(CommentBox).length).toEqual(1);
})

it('shows a comment list', ()=>{
    const wrapped = shallow(<App />);
    expect(wrapped.find(CommentList).length).toEqual(1);
})