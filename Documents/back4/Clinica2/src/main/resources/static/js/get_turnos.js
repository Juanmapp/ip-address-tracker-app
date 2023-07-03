window.addEventListener('load', function() {
    
    document.querySelector('#btn_listar').addEventListener('click', function (e) {

       
        let id_paciente = document.querySelector('#id_paciente').value;
        let div_turnos_table = document.querySelector('#div_turnos_table');
        
       
        document.querySelector('#turnosTable').innerHTML = `<thead>
        <tr>
             <th></th>
             <th>Paciente</th>
             <th>Odontologo</th>
             <th>Fecha</th>
             <th>Hora</th>
             <th></th>
        </tr>
        </thead>
        <tbody id="turnosTableBody"></tbody>`;

        
        

        let urlTurnosByPaciente = '/Turnos';
        let payload = {
            method: 'GET'
        }

        fetch(urlTurnosByPaciente,payload)

        .then(response => response.json())

        .then(data => {

                div_turnos_table.style.display = "block";
                console.log(data);
                for(turno of data){
                    console.log(turno);
                    
                    let tabla = document.querySelector('#turnosTable');
                    let turnoRow = tabla.insertRow();
                    let row_id = 'row_' + turno.id;
                    turnoRow.id = row_id;
                
                    let deleteButton = '<button' +
                    'id= btn_delete_' + turno.id + '\"' +
                    ' type="button" onclick="deleteBy(' + turno.id + ')"' +
                    'class="btn btn-danger btn_delete">&times' + 
                    '</button>';

                    let updateButton = '<button' +
                    ' id=' + '\"' + 'btn_id_' + turno.id + '\"' +
                    ' type="button" onclick="findBy('+ turno.id+')"' + 
                    ' class="btn btn-info btn_id">' + turno.id +
                    '</button>';

                    turnoRow.innerHTML =
                    '<td>' + updateButton + '</td>' +
                    '<td class=\"td_paciente\">' + turno.paciente.apellido + '</td>' + 
                    '<td class=\"td_odontologo\">' + turno.odontologo.apellido + '</td>' + 
                    '<td class=\"td_fecha\">' + turno.fechayHora + '</td>' + 
                    '<td>' + deleteButton + '</td>'; 
                
            }

        })

    })
})
