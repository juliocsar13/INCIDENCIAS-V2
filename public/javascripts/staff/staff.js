$(function(){

        var table_staff = $("#table_staff").dataTable({
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

        var btnGetStaff = $('#btnModalStaffPerfil');
        var btnEditSubmitStaff = $("#btnStaffModal");
        var btnSaveSubmitStaff1 = $("#btnSaveSubmitStaff");

        btnGetStaff.live('click',getStaffPerfil)
        btnEditSubmitStaff.live('click',EditSubmitStaff);
        btnSaveSubmitStaff1.live('click',SaveSubmitStaff);

        function EditSubmitStaff(){

            self = $(this);

            var id = self.data('id');

            $.get('/usuarios/' + id)
                .done(function(staff){

                    $("#editIdStaff").val(staff.id)
                    $("#editDniStaff").val(staff.dni)
                    $("#editRoleStaff").val(staff.role)
                    $("#editNameStaff").val(staff.name)
                    $("#editLastnameStaff").val(staff.lastname)
                    $("#editEmailStaff").val(staff.email)
                    $("#editDependenceStaff").val(staff.dependence)
                    $("#editPasswordStaff").val(staff.password)
                    $("#editPhoneStaff").val(staff.phone)
                    $("#editRecorderStaff").val(staff.recorder)
                    $("#editDateStaff").val(staff.register_date_staff)
                    $("#editSFlatStaff").val(staff.flat)

                })
        }

        function SaveSubmitStaff(){

            var data = {};

            data.dni                  = $("#editDniStaff").val();
            data.role                 = $("#editRoleStaff").val();
            data.name                 = $("#editNameStaff").val();
            data.lastname             = $("#editLastnameStaff").val();
            data.email                = $("#editEmailStaff").val();
            data.dependence           = $("#editDependenceStaff").val();
            data.password             = $("#editPasswordStaff").val();
            data.phone                = $("#editPhoneStaff").val();
            data.recorder             = $("#editRecorderStaff").val();
            data.register_date_staff  = $("#editDateStaff").val()
            data.flat                 = $("#editSFlatStaff").val()

            var IdStaff  = $("#editIdStaff").val();

            $.post('/usuarios/' + IdStaff , data)
                .done(function(){

                })
        }


        function getStaffPerfil(){
            var staff_perfil = $('#labelstaff').val();
            $('#recorderStaff').val(staff_perfil);
        }




    var btnHabiliteStaff_ = $("#btnHabiliteStaff")
    btnHabiliteStaff_.live('click',toggleStaffHabilited)


    var btnHabilitedSubmit_ = $("#btnHabilitedSubmitStaff")
    btnHabilitedSubmit_.live('click',toggleConfirmStaff)





    function toggleStaffHabilited(){
        var data = {};

        self = $(this);

        var id_ = self.data('id');

        
        
        if(self.hasClass('btn-primary')){
            data.flat = "habilitado";
        }else{
            data.flat = "inhabilitado";
        }

        localStorage.setItem('id_staff',id_)
        localStorage.setItem('data_staff',JSON.stringify(data))


    }

    function toggleConfirmStaff(){



        var _id_     = localStorage.getItem('id_staff');
        var data_   = localStorage.getItem('data_staff');
        var _data_  = JSON.parse(data_); 



        $.ajax({

            type: "PUT",
            url: '/usuarios/' + _id_,
            data: _data_,

            success: function (result) {

                if(self.hasClass('btn-primary')){

                    self.removeClass('btn-primary');
                    self.addClass('btn-success');
                    self.removeClass('btn-content-inhabilited');
                    self.addClass('btn-content-habilited');
                    $("#confirmStaffModal").modal('hide');
                    

                } else {

                    self.removeClass('btn-success');
                    self.addClass('btn-primary');
                    self.removeClass('btn-content-habilited');
                    self.addClass('btn-content-inhabilited');
                    $("#confirmStaffModal").modal('hide');
                }
            }
        })
    }



});
