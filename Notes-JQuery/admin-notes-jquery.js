$(document).ready(despliegaNotas);

function despliegaNotas() {
    fetch("http://localhost:3000/notes/")
        .then((response) => response.json())
        .then((json) => {
            json.forEach((note) => {
                let nota =  `<tr>
                                <td>${note.title}<td>
                                <td>${note.content}<td>
                                <td>
                                    <button type="button" id="editarNota" class="btn btn-primary">Editar</button>
                                    <button type="button" id="borrarNota" class="btn btn-danger" value="${note.id}">Eliminar</button>
                                <td>
                            </tr>`;
                $('#table1').append(nota);
            });
        });
}

$("#crearNota").click(function (event) {
    event.preventDefault();
    $("#table1 tr").remove();

    var titulo = $("#titulo").val();
    var contenido = $("#contenido").val();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        title: titulo,
        content: contenido,
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch("http://localhost:3000/notes/", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error))
        .finally(function () {
            despliegaNotas();
        });
});

$("#borrarNota").click(function (event) {
    event.preventDefault();
    $("#table1 tr").remove();

    let row = $(this).closest('tr');
    id = row.find("td:eq(0)").text();
    console.log(id)

    var requestOptions = {
        method: "DELETE",
        redirect: "follow",
    };

    fetch(`http://localhost:3000/notes/${id}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error))
        .finally(function () {
            despliegaNotas();
        });
});