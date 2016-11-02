var modal = document.getElementById('title');
var span = document.getElementsByClassName("close")[0];

//closes title
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
