$('#cuyo').click(function () {
  drawRegion([11,12,17,18]);
  $(".chartbtns").removeClass("btn-primary btn-link");
  $(".chartbtns").addClass("btn-link");
  $('#cuyo').removeClass("btn-link").addClass("btn-primary");
 });

 $('#noreste').click(function () {
   drawRegion([2,6,7,8,13,21]);
   $(".chartbtns").removeClass("btn-primary btn-link");
   $(".chartbtns").addClass("btn-link");
   $('#noreste').removeClass("btn-link").addClass("btn-primary");
  });

  $('#noroeste').click(function () {
    drawRegion([1,9,16,23]);
    $(".chartbtns").removeClass("btn-primary btn-link");
    $(".chartbtns").addClass("btn-link");
    $('#noroeste').removeClass("btn-link").addClass("btn-primary");
   });

   $('#pampeana').click(function () {
     drawRegion([0,4,5,10,20]);
     $(".chartbtns").removeClass("btn-primary btn-link");
     $(".chartbtns").addClass("btn-link");
     $('#pampeana').removeClass("btn-link").addClass("btn-primary");
    });

    $('#patagonia').click(function () {
      drawRegion([3,14,15,19,22]);
      $(".chartbtns").removeClass("btn-primary btn-link");
      $(".chartbtns").addClass("btn-link");
      $('#patagonia').removeClass("btn-link").addClass("btn-primary");
     });

function drawHighcharts(id) {

  var porcentajeRegistro = ((dataset[id].pymesRegistradas*100)/dataset[id].pymesTotal).toFixed(1);

  dataHTML = "<div class='row p-t-2'><div class='col-md-2 chartItem'><h4>";
  dataHTML += dataset[id].nombre;
  dataHTML += "</h4><p class='text-muted'>PyMEs Total<br><strong>";
  dataHTML += Number(dataset[id].pymesTotal).toLocaleString();
  dataHTML += "</strong></p><p class='text-muted'>Registradas<br><strong>";
  dataHTML += Number(dataset[id].pymesRegistradas).toLocaleString();
  dataHTML += " | ";
  dataHTML += Number(porcentajeRegistro).toLocaleString()  + '%';
  dataHTML += "</strong></p>";
  // dataHTML += "<button class='btn btn-primary btn-xs collapsed' data-toggle='collapse' data-target='#masInfo"+id+"' aria-expanded='false'>Ver Más Info</button>";
  dataHTML += "</div><div class='col-md-10'><div id='chart" + id + "' style='height: auto'></div></div>";
  dataHTML += "<div class='col-md-10 col-md-offset-2'><div class='row collapse chart-masinfo' id='masInfo"+id+"'><div class='col-md-12 bg-primary'><h5 class='m-y-2 m-x-1'>Detalles de Provincia <a href='javascript:undefined' data-toggle='collapse' data-target='#masInfo"+id+"'><i class='fa fa-close pull-right'></i></a></h5></div><div class='col-md-12'>";
  dataHTML += "<div class='col-md-3 text-center'><i class='fa fa-user text-primary fa-4x m-y-2'></i><p class='text-muted m-b-0'><strong>Dato Number</strong></p><p>00.000.000</p></div>";
  dataHTML += "<div class='col-md-3 text-center'><i class='fa fa-file text-primary fa-4x m-y-2'></i><p class='text-muted m-b-0'><strong>Dato Number</strong></p><p>00.000.000</p></div>";
  dataHTML += "<div class='col-md-3 text-center'><i class='fa fa-flask text-primary fa-4x m-y-2'></i><p class='text-muted m-b-0'><strong>Dato Number</strong></p><p>00.000.000</p></div>";
  dataHTML += "<div class='col-md-3 text-center'><i class='fa fa-truck text-primary fa-4x m-y-2'></i><p class='text-muted m-b-0'><strong>Dato Number</strong></p><p>00.000.000</p></div>";
  dataHTML += "</div></div></div>";


  $('#chartContainer').append(dataHTML);

  Highcharts.chart('chart' + id, {
    chart: {
      type: 'bar',
      height: 300
    },
    title: {
      text: ''
    },
    colors: ['#2196F3', '#4CAF50', '#f44336', '#FFC107', '#FFEB3B', '#78C0E0'],
    legend: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },

    xAxis: {
      tickInterval: 45,
      min: 0,
      max: 225,
      labels: {
        useHTML: true,
        formatter: function() {

          var icon = [];
          icon[0] = '<h1><i class="fa fa-industry" style="color: #2196F3"></i></h1>';
          icon[45] = '<h1><i class="fa fa-leaf" style="color: #4CAF50"></i></h1>';
          icon[90] = '<h1><i class="fa fa-ship" style="color: #f44336"></i></h1>';
          icon[135] = '<h1><i class="fa fa-signal" style="color: #FFC107"></i></h1>';
          icon[180] = '<h1><i class="fa fa-gears" style="color: #FFEB3B"></i></h1>';
          icon[225] = '<h1><i class="fa fa-diamond" style="color: #78C0E0"></i></h1>';

          return icon[this.value];
        },
      }
    },

    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: null
      },
      labels: {
        formatter: function() {
            return this.value + "%"
          }
        }
      },
    credits: {
      enabled: false
    },

    plotOptions: {
      bar: {
        pointWidth: 10,
        dataLabels: {
          enabled: true
        }
      },
      series: {
        pointWidth: 25,
        dataLabels: {
          allowOverlap: true,
          enabled: true,
          useHTML: true,
          color: '#333',
          fontSize: '10px',
          formatter: function() {
            var icon = [];
            icon[0] = '<p class="chart-label">Industria: <strong>' +  Number(this.y.toFixed(1)).toLocaleString() + '</strong>%<small class="text-muted"> | '+ Number(dataset[id].industriaReg).toLocaleString() + ' de ' + Number(dataset[id].industriaTotal).toLocaleString() + '</small></p>';
            icon[45] = '<p class="chart-label">Agropecuario: <strong>' + Number(this.y.toFixed(1)).toLocaleString() + '</strong>%<small class="text-muted"> | '+ Number(dataset[id].agroReg).toLocaleString() + ' de ' + Number(dataset[id].agroTotal).toLocaleString() + '</small></p>';
            icon[90] = '<p class="chart-label">Comercio: <strong>' + Number(this.y.toFixed(1)).toLocaleString() + '</strong>%<small class="text-muted"> | '+ Number(dataset[id].comercioReg).toLocaleString() + ' de ' + Number(dataset[id].comercioTotal).toLocaleString() + '</small></p>';
            icon[135] = '<p class="chart-label">Servicio: <strong>' + Number(this.y.toFixed(1)).toLocaleString() + '</strong>%<small class="text-muted"> | '+ Number(dataset[id].servicioReg).toLocaleString() + ' de ' + Number(dataset[id].servicioTotal).toLocaleString() + '</small></p>';
            icon[180] = '<p class="chart-label">Construcción: <strong>' + Number(this.y.toFixed(1)).toLocaleString() + '</strong>%<small class="text-muted"> | '+ Number(dataset[id].construccionReg).toLocaleString() +' de ' + Number(dataset[id].construccionTotal).toLocaleString() + '</small></p>';
            icon[225] = '<p class="chart-label">Minería: <strong>' + Number(this.y.toFixed(1)).toLocaleString() + '</strong>%<small class="text-muted"> | '+ Number(dataset[id].mineriaReg).toLocaleString() +' de ' + Number(dataset[id].mineriaTotal).toLocaleString() + '</small></p>';
            return icon[this.x];
          },
        },
        colorByPoint: true,
        pointStart: 0,
        pointInterval: 45,
      },

    },

    series: [{
      type: 'column',
      name: 'Provincia',
      data: [dataset[id].industriaReg/dataset[id].industriaTotal*100, dataset[id].agroReg/dataset[id].agroTotal*100, dataset[id].comercioReg/dataset[id].comercioTotal*100, dataset[id].servicioReg/dataset[id].servicioTotal*100, dataset[id].construccionReg/dataset[id].construccionTotal*100, dataset[id].mineriaReg/dataset[id].mineriaTotal*100]
    }]
  });
};


function drawRegion(array){
  $('#chartContainer').html('');
  for (var i = 0; i < array.length; i++) {
    drawHighcharts(array[i])
  }
}

function drawDatos(universo,vigentes,totales, fecha){
  var porcVigentes = vigentes/universo*100;
  var porcTotales = totales/universo*100;
  $('#universoPyme').html('<h1>' + Number(universo).toLocaleString() + '</h1><p>Total de PyMEs argentinas</p>');
  $('#pymesVigentes').html('<h1>' + Number(vigentes).toLocaleString() + '<span class="thin"> | ' + Number(porcVigentes.toFixed(1)).toLocaleString() + '%</span></h1><p>PyMEs registradas vigentes</p>');
  $('#pymesTotales').html('<h1>' + Number(totales).toLocaleString() + '<span class="thin"> | ' + Number(porcTotales.toFixed(1)).toLocaleString() + '%</span></h1><p>PyMEs registradas </br>desde la implementación de la ley</p>');
  $('#fechaActualizacion').html('Última fecha de actualizacion:'+ fecha.toLocaleString());
}
