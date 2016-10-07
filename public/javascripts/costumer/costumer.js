$(function(){

    var table_costumer = $("#table_costumer").dataTable({
        "oLanguage": {
            "sSearch": "Buscar : ",
            "sLengthMenu": "Mostrar _MENU_ registros por pagina",
            "sInfo": "Mostrando pagina _PAGE_ de _PAGES_",
            "sEmptyTable": "No se encontraron datos en la tabla",
            "sInfoFiltered": " - filtrado de _MAX_ registros",
            "oPaginate": {
        		"sPrevious": "Anterior",
        		"sNext":     "Siguiente"
        	}
        }

    });

    var btnEditCostumer_ = $("#btnEditCostumer");
    var btnSaveCostumer_ = $("#btnSaveCostumer");
    var btnGetUser_costumer = $('#btnModalcostumerPerfil');
    //var btnSubmitCostumer_ = $("#btnSubmitCostumer")

    btnEditCostumer_.live('click',getEditCostumers);
    btnSaveCostumer_.live('click',saveAllCostumer);
    btnGetUser_costumer.live('click',getUserPerfilCostumer)
    //btnSubmitCostumer_.live('click',submitCostumerIncide);

    function getEditCostumers(){

        self = $(this);
        var id = self.data('id');

        $.get('/clientes/'+ id)
            .done(function(costumer){

                $("#editIdCostumer").val(costumer.id)
                $("#editDniCostumer").val(costumer.dni)
                $("#editNameCostumer").val(costumer.name)
                $("#editRoleCostumer").val(costumer.role)
                $("#editPhoneCostumer").val(costumer.phone)
                $("#editEmailCostumer").val(costumer.email)
                $("#editLastnameCostumer").val(costumer.lastname)
                $("#editRecorderCostumer").val(costumer.recorder)
                $("#editDateCostumer").val(costumer.register_date_person)

            })
    }

    function saveAllCostumer(){
        var data = {};
        data.dni                   = $("#editDniCostumer").val()
        data.name                  = $("#editNameCostumer").val()
        data.role                  = $("#editRoleCostumer").val()
        data.phone                 = $("#editPhoneCostumer").val()
        data.email                 = $("#editEmailCostumer").val()
        data.lastname              = $("#editLastnameCostumer").val()
        data.recorder              = $("#editRecorderCostumer").val()
        data.register_date_person  = $("#editDateCostumer").val()

        var id =  $("#editIdCostumer").val()
        console.log("ID",id)

        $.post('/clientes/'+ id , data)
            .done(function(){

            })
    }


    function getUserPerfilCostumer(){
        var user__costumer = $('#userlabelCostumer').val();
        $('#recorderUser').val(user__costumer);
    }

    /*function submitCostumerIncide(){
        var data_costumer = {};

        data_costumer.dni                   = $("#createDniCostumer").val()
        data_costumer.name                  = $("#createNameCostumer").val()
        data_costumer.role                  = $("#createRoleCostumer").val()
        data_costumer.phone                 = $("#createPhoneCostumer").val()
        data_costumer.email                 = $("#createEmailCostumer").val()
        data_costumer.lastname              = $("#createLastnameCostumer").val()
        data_costumer.recorder              = $("#createRecorderCostumer").val()
        data_costumer.register_date_person  = $("#createDateCostumer").val()
    }

    $.ajax({
        type:'POST',
        data:JSON.stringify(data_costumer),
        contentType:'aplication/json',
        url:'http://localhost:3002/clientes',
        success:function(req,res){
            console.log('success');
            console.log(JSON.stringify(data_costumer))
        }
    })*/
})
