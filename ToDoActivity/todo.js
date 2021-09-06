$(document).ready(function () {
    let endpoint = "https://jsonplaceholder.typicode.com/todos"

        $.ajax({
            url: endpoint,
            contentType: "application/json",
            dataType: 'json',
            type: 'get',
            success: function (result) {
                result.forEach(tarea => {
                    let row = '<tr>' + '<td scope="row">' + tarea.id + '<td>' + '<td>' + tarea.title + '<td>' + '<td>' + tarea.completed + '<td>' + '</tr>';
                    $('#table1').append(row);

                    $('td:contains(false)').prevAll().addBack().addClass('Uncompleted');
                    $('td:contains(true)').prevAll().addBack().addClass('Completed');
                })
            },
            error: function(result){
                console.log("La llamada no se pudo completar")
            }
        });
});