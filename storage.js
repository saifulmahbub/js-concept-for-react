const addToLocal = () => {
  const firstUserId = document.getElementById("user1-id");

  const id = firstUserId.value;
  const firstUserValue = document.getElementById("user1-value");
  const value = firstUserValue.value;

  localStorage.setItem(id, value);
  id.value = " ";
  value.value = " ";
};
