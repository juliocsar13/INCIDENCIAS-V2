$(function(){

    $('[data-toggle="tooltip"]').tooltip();

    var btnGetUser = $('#btnModaluser')
    btnGetUser.live('click',getUserPerfil)

    function getUserPerfil(){
        var user__=$('#userlabel').val()
        $('#usuario_r').val(user__)
    }

    $(document).on('show.bs.modal', '.modal', function () {
        var zIndex = 1040 + (10 * $('.modal:visible').length);
        $(this).css('z-index', zIndex);
        setTimeout(function() {
            $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
        }, 0);
    })

    function updateClock() {
        var date = new Date();
        var dateFormated = date.getDate() + '-' + (date.getMonth()+1) + '-' + date.getFullYear() +' | '+ date.getHours() +':'+date.getMinutes()+':'+date.getSeconds();
        $("#dateIncidencia").val(dateFormated);
        $("#datePerson").val(dateFormated);
        $("#dateStaff").val(dateFormated);
        $("#createDateCostumer").val(dateFormated);
    }

    setInterval(updateClock, 1000);


    $('.select2-costumer-incide').select2({
        placeholder:"Seleccionar cliente"
    });

    $('.select2-tecnico-incide').select2({
        placeholder:"Seleccionar tecnico"
    });

    $('.select2-dependence-incide').select2({
        placeholder:"Seleccionar dependencia"
    });

    $('.select2-dependence-staff').select2({
        placeholder:"Seleccionar dependencia"
    });

});
