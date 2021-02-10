import { FETCH_COMMENTS, SAVE_COMMENT } from "actions/types";

export default function comments(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      const comments = action.payload.data.map(comment=>{
        return comment.body + comment.id;
      })
      return state.concat(comments)
    default:
      return state;
  }
}
