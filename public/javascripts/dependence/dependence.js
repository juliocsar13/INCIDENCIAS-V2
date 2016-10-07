$(function(){
    var table_dependence = $("#table_dependence").dataTable({
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

    var btnEditDependence = $('#btnEditDependence');
    var btnEditSubmitDependence = $('#btnEditSubmitDependences_');
    //var btnSubmitDependence  = $("#btnSubmitDependenceIncidencia")

    btnEditDependence.live('click',getEditDependence);
    btnEditSubmitDependence.live('click',SubmitEditDependence);
    //btnSubmitDependence.live('click',submitDependenceIncide);

    function getEditDependence(){
        //var data ={};
        self = $(this);
        var id = self.data('id');
        console.log("data-id",id);

        $.get('/dependencias/' + id)
            .done(function(dependence){
                $("#editIdDependence").val(dependence.id)
                $("#editNameDependence").val(dependence.nameDependence)
                $("#editSiglasDependence").val(dependence.siglas)
        })
    }

    function SubmitEditDependence(){

        var data = {};

        data.siglas         = $("#editSiglasDependence").val();
        data.nameDependence = $("#editNameDependence").val();

        var id = $("#editIdDependence").val()
        $.post('/dependencias/' +id , data)
            .done(function(_dependence_){
            })
    }

    /*function submitDependenceIncide(){
        var data_dependence = {};

        data_dependence.nameDependence = $("#createNameDependence").val()
        data_dependence.siglas  = $("#createNameSiglas").val()

        $.ajax({
            type:'POST',
            data:JSON.stringify(data_dependence),
            contentType:'aplication/json',
            url: 'http://localhost:3002/dependencias/nuevo',

            success: function(req,res){
                console.log('success');
                console.log(JSON.stringify(data_dependence));
            }
        })

    }*/
})
