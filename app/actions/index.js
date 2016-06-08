import ActionTypes from "../constants/index.js"
export function test(data) {
  return (dispatch=>{
      dispatch({ type: ActionTypes.APP_TEST, one_data:data });
  })
}
