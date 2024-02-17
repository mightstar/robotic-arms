function sortPackage(width, height, length, mass) {
  if (
    typeof width !== "number" ||
    typeof height !== "number" ||
    typeof length !== "number" ||
    typeof mass !== "number" ||
    width < 0 ||
    height < 0 ||
    length < 0 ||
    mass < 0
  ) {
    return "INVALID";
  }

  const volume = width * height * length;
  const isBulky =
    volume >= 1000000 || width >= 150 || height >= 150 || length >= 150;
  const isHeavy = mass >= 20;

  console.log(isBulky, isHeavy, length, mass);

  if (isBulky && isHeavy) {
    return "REJECTED";
  } else if (isBulky || isHeavy) {
    return "SPECIAL";
  } else {
    return "STANDARD";
  }
}

document
  .getElementById("packageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);
    const length = parseFloat(document.getElementById("length").value);
    const mass = parseFloat(document.getElementById("mass").value);

    const result = sortPackage(width, height, length, mass);

    document.getElementById("result").textContent = `Package Stack: ${result}`;
  });
