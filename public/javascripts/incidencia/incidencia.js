$(function(){

    var table_incidencias = $("#table_incidencias").dataTable({

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
    
    var btnGetUserRegisterIncidencia = $('#btnCreateCostumer');

    btnGetUserRegisterIncidencia.live('click',getUserRegister);
    function getUserRegister(){

        var _userRegister_ = $('#userlabel').val();
        $('#recorderUser').val(_userRegister_)

    }

    var btnStateConfirm = $("#btnStateConfirmIncidencia");
    btnStateConfirm.live('click', toggleIncidencia);

    function toggleIncidencia(){

        self = $(this);

        var state = self.data('id');
        $.get('/incidencias/'+ state)
            .done(function(incidencia){
                $("#editIdIncidencia").val(incidencia.id)
                $("#editStateIncidencia").val(incidencia.state);
                $("#editCommentIncidencia").val(incidencia.comment);

            })
    }

    var btnSubmitIncidencia_ = $('#btnStateSubmitIncidencia');
    btnSubmitIncidencia_.live('click',submitConfirmState)


    function submitConfirmState(){

        var data = {};

        data.state  = $("#editStateIncidencia").val();
        data.comment = $("#editCommentIncidencia").val();

        var id = $("#editIdIncidencia").val();

        $.post('/incidencias/'+ id , data)
            .done(function(incidencias){

                $("#confirmIncidenciaModal").modal('hide')
            })


    }



    var btnGetIncidencia_ = $('#btnGetIncidencia');
    btnGetIncidencia_.live('click',getViewIncidencias)

    function getViewIncidencias(){

        self = $(this);
        var id = self.data('id');
        $.get('/incidencias/' + id)
            .done(function(incidencia){
                $("#viewTitleIncidencia").text(incidencia.title)
                $("#viewDependenceIncidencia").text(incidencia.dependence)
                $("#viewPriorityIncidencia").text(incidencia.priority)
                $("#viewNotificationMeansIncidencia").text(incidencia.notificacionMeans)
                $("#viewCostumerIncidencia").text(incidencia.costumer)
                $("#viewTecnicoIncidencia").text(incidencia.technical)
                $("#viewStateIncidencia").text(incidencia.state)
                $("#viewRegisterIncidencia").text(incidencia.userRegister)
                $("#viewDateIncidencia").text(incidencia.registration_date)
                $("#viewDescriptionIncidencia").text(incidencia.description)
                $("#viewCommentIncidencia").text(incidencia.comment)


        })
    }
})

/*    $("#select-state").on('change', function() {
        filter by selected value on second column
                table_incidencias.fnFilter($(this).val(), 10);
            });
            $("#select-medio").on('change', function() {
                //filter by selected value on second column
                table_incidencias.fnFilter($(this).val(), 4);
            });*/
