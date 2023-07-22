import Cookies from "universal-cookie";

export function get_auth_token() {
  return new Cookies().get("auth-cookie");
}
