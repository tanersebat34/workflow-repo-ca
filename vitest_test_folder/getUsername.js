export function getUsername() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.name : null;
}
