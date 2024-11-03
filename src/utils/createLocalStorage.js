const getItemsFromLocalStorage = () => {
  const storedItems = localStorage.getItem("applied-job-id");
  if (storedItems) {
    return JSON.parse(storedItems);
  } else {
    return [];
  }
};
const saveItemsToLovalStorage = (id) => {
  const storedItems = getItemsFromLocalStorage();
  const isThere = storedItems.find((jobId) => jobId === id);
  if (!isThere) {
    storedItems.push(id);
    localStorage.setItem("applied-job-id", JSON.stringify(storedItems));
  }
};
export { saveItemsToLovalStorage, getItemsFromLocalStorage };
