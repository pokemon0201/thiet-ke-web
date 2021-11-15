const btnElement = document.querySelector("button");
btnElement.addEventListener("click", (e) => {
  e.preventDefault();
  const addressValue = document.querySelector(".address");
  const nameValue = document.querySelector("input");
  let value = "";
  if (addressValue.value === "" || nameValue.value === "")
    alert("Khong duoc bo trong");
  const arr = addressValue.value.split(/(\s+)/).filter(function (e) {
    return e.trim().length > 0;
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charAt(0).match(/^[a-z]/)) {
      const k = arr[i].charAt(0).toUpperCase();
      value += k + arr[i].substring(1) + " ";
    }
  }
  addressValue.value = value;
});
