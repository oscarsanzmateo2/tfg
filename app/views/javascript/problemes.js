function renderPagCrearProblemes() {
    var temaID = window.location.pathname.split("/").pop()
    document.getElementById("creaProblemesForm").action = `/api/chatGptApi/${temaID}`
}
document.addEventListener("DOMContentLoaded", renderPagCrearProblemes)


function ProblemaPersonalitzatMostrar() {
    const ProblemaPersonalitzatArea = document.getElementById("ProblemaPersonalitzatArea")
    const tipusProblema = document.getElementById("TipusProblema").value
    ProblemaPersonalitzatArea.style.display = (tipusProblema === "ProblemaPersonalitzat") ? "block" : "none"
}