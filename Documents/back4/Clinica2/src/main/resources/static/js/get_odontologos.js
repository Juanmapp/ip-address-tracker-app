window.addEventListener('load', function () {

    (function() {

        let url = '/odontologos';
        let payload = {
            method: 'GET'
        }

        fetch(url,payload)

        .then(response => response.json())

        .then(data => {


            
            
                
                for(odontologo of data){
                
                
                    
                    let table = document.querySelector('#odontologoTable'); 
                    let odontologoRow = table.insertRow(); 
                    let trow_id = 'tr_' + odontologo.id; 
                    odontologoRow.id = trow_id;
                    
                    let deleteButton = '<button' +
                        'id= btn_delete_' + odontologo.id + '\"' +
                        ' type="button" onclick="deleteBy(' + odontologo.id + ')"' +
                        'class="btn btn-danger btn_delete">&times' + 
                        '</button>';

                    
                    let updateButton = '<button' +
                        ' id=' + '\"' + 'btn_id_' + odontologo.id + '\"' +
                        ' type="button" onclick="findBy('+odontologo.id+')"' + 
                        ' class="btn btn-info btn_id">' + odontologo.id +
                        '</button>';
                
                    odontologoRow.innerHTML = 
                        '<td>' + updateButton + '</td>' +
                        '<td class=\"td_nombre\">' + odontologo.nombre + '</td>' + 
                        '<td class=\"td_apellido\">' + odontologo.apellido + '</td>' + 
                        '<td class=\"td_matricula\">' + odontologo.matricula + '</td>' + 
                        '<td>' + deleteButton + '</td>'; 
            

        }
    })
})
    (function(){
        let pathname = window.location.pathname;
        if (pathname == "/odontologoList.html") {
            document.querySelector(".nav .nav-item a:last").addClass("active");
        }
    })

})