//Se importan los estilos a utilizar en la vista
import "../../utils/stylesGlobal.scss";
import "../../components/navbar/navbar.scss";
import "../../components/sidebar/sidebar.scss";
import "../../components/calendar/calendar.scss";

//Tu codigo JS de la vista
let toggleBtn = document
  .querySelector(".sidebar__toggle-btn")
  .addEventListener("click", toggle);

function toggle() {
  alert("Proximamente me escondere, no comas ansias");
}
