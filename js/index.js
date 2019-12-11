// eslint-disable-next-line no-unused-vars
function loadDoc(basename) {
  const url = `${basename}.html` || "index.html";
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById("main").innerHTML = this.responseText;

      const navItem = document.querySelectorAll("a");
      navItem.forEach(item => item.classList.remove("active"));

      const newActive = document.querySelector(`#${basename}`);
      newActive.classList.add("active");
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
