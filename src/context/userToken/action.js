export function userTokenAction(dispatch, payload) {
  dispatch({ type: "LOGIN-SUCCESS", payload });
  localStorage.setItem("currentUser", JSON.stringify(payload));
}
