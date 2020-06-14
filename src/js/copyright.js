export const copyRight = (nume) => {
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  document.getElementById("copyright").innerHTML = "© " + year + " " + nume;
}