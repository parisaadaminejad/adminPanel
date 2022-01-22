let firstName =
  JSON.parse(localStorage.getItem("currentUser"))?.user?.first_name || "";

let token = JSON.parse(localStorage.getItem("currentUser"))?.token || "";
let lastName =
  JSON.parse(localStorage.getItem("currentUser"))?.user?.last_name || "";

let email = JSON.parse(localStorage.getItem("currentUser"))?.user?.email || "";
let phone_number =
  JSON.parse(localStorage.getItem("currentUser"))?.user?.phone_number || "";
export const initialState = {
  token: "" || token,
  first_name: "" || firstName,
  email: "" || email,
  last_name: "" || lastName,
  phone_number: "" || phone_number,
};
export function UserTokenReducer(initialState, action) {
  switch (action.type) {
    case "REQUEST-LOGIN":
      return {
        ...initialState,
      };
    case "LOGIN-SUCCESS":
      return {
        ...initialState,
        email: action.payload.user.email,
        first_name: action.payload.user.first_name,
        last_name: action.payload.user.last_name,
        token: action.payload.token,
        phone_number: action.payload.user.phone_number,
      };
    case "LOGIN_ERROR":
      return {
        ...initialState,
      };
  }
  return action;
}
