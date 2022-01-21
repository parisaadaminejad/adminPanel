export function userTokenAction(dispatch, payload) {
  //   localStorage.setItem("currentUser", payload);
  //   dispatch(payload);
  dispatch({ type: "LOGIN-SUCCESS", payload });
  localStorage.setItem("currentUser", JSON.stringify(payload));
}
