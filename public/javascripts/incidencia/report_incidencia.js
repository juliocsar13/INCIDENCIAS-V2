$(function(){

   $("#btnExportPDF").click(function(){
      generatePDFmake();
   });

   $("#btnExportExcel").click(function(){

       var date       = new Date();
       var dd         = date.getDate();
       var mm         = date.getMonth()+1; //January is 0!
       var yyyy       = date.getFullYear();
       $("#table_incidencias").table2excel({




           exclude: ".excludeThisClass",
           name: "Worksheet Name"+date,
           filename: "Incidencia" //do not include extension
       });
   });

});

function generatePDFmake(){
   var columns    = [];
   var data       = [];
   var body       = [];
   var flag       = true;
   var table      = $('#table_incidencias').tableToJSON();

   var today      = new Date();
   var dd         = today.getDate();
   var mm         = today.getMonth()+1; //January is 0!
   var yyyy       = today.getFullYear();


   for (var i = 0; i < table.length; i++) {
      if(i==0){

         for (var key in table[0]) {
           if (table[0].hasOwnProperty(key)) {
               data.push({
                  text: key,
                  bold: true,
                  alignment : 'center'
               });
           }
         }
      }

      else {
            for (var key in table[i]) {
                if (table[i].hasOwnProperty(key)) {
                    data.push(table[i][key]);
                }
            }

      }

      body.push(data);
      data = [];

   }



   var dd = {
      pageSize: 'A4',

  // by default we use portrait, you can change it to landscape if you wish
      pageOrientation: 'landscape',
   	  content: [
         { text: 'Orden de pedido de compra\n\n', fontSize: 25,alignment: 'center' },
         {
            columns: [
              {
                width: '*',
                text: 'Orden de pedido : Nª 012129',
                alignment : 'left'
              },
              {
                width: '*',
                text: 'Fecha  :  ' +  dd+'/'+mm+'/'+yyyy ,
                alignment : 'right'

              }
            ]
         },
         '\n\n ',
 			{
				table: {
               headerRows: 1,
               widths: [ 'auto', 'auto', 'auto', 'auto','auto','auto', 'auto', 'auto', 'auto','auto'],
					body: body
				}
				//layout: 'headerLineOnly'
			}
      ],
      styles: {
       header: {
         fontSize: 22,
         bold: true
       },
       anotherStyle: {
         italics: true,
         alignment: 'right'
       }
     }
   }

   // open the PDF in a new window
   pdfMake.createPdf(dd).open();

   // print the PDF (temporarily Chrome-only)
   //pdfMake.createPdf(dd).print();

}
