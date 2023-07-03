window.addEventListener('load', function () {

    (function() {
        let url = '/pacientes';
        let payload = {
            method: 'GET'
        }

        fetch(url,payload)

        .then(response => response.json())

        .then(data => {

                for(paciente of data){
                
                    
                    let table = document.querySelector('#pacienteTable');  
                    let pacienteRow = table.insertRow(); 
                    let trow_id = 'tr_' + paciente.id; 
                    pacienteRow.id = trow_id; 
                
                    

                    
                    let deleteButton = '<button' +
                        'id= btn_delete_' + paciente.id + '\"' +
                        ' type="button" onclick="deleteBy(' + paciente.id + ')"' +
                        'class="btn btn-danger btn_delete">&times' + 
                        '</button>';

                    
                    let updateButton = '<button' +
                        ' id=' + '\"' + 'btn_id_' + paciente.id + '\"' +
                        ' type="button" onclick="findBy('+paciente.id+')"' + 
                        ' class="btn btn-info btn_id">' + paciente.id +
                        '</button>';
                
                    
                    pacienteRow.innerHTML = 
                        '<td>' + updateButton + '</td>' + 
                        '<td class=\"td_dni\">' + paciente.dni + '</td>' + 
                        '<td class=\"td_nombre\">' + paciente.nombre + '</td>' +
                        '<td class=\"td_apellido\">' + paciente.apellido + '</td>' + 
                        '<td>' + deleteButton + '</td>'; 
                }
        })
    })

    (function(){
        let pathname = window.location.pathname;
        if (pathname == "/listadoPacientes.html") {
            document.querySelector(".nav .nav-item a:last").addClass("active");
        }
    })
})