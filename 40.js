//Autor: Danna Maribel Corral Salcedo
//Una empresa guarda las ventas realizadas por sus tres representantes a lo largo de doce
//meses de sus cuatro productos, VENTAS( representante, mes, producto ). Queremos proyectar el
//total de ventas, TOTAL ( mes, producto ), para lo cual sumamos las ventas de cada producto de
//cada mes de todos los representantes. Imprimir toda la información.

const ventas = [

    [
      [100, 200, 300, 400], 
      [150, 250, 350, 450],
      [120, 220, 320, 420]  
    ],
    [
      [110, 210, 310, 410], 
      [160, 260, 360, 460], 
      [130, 230, 330, 430]  
    ],
    [
      [120, 220, 320, 420], 
      [170, 270, 370, 470], 
      [140, 240, 340, 440]  
    ]
  ];
  
  function calcularTotalVentas(ventas) {
    const total = [];
    for (let mes = 0; mes < ventas[0].length; mes++) {
      total[mes] = [];
      for (let producto = 0; producto < ventas[0][0].length; producto++) {
        total[mes][producto] = 0;
        for (let representante = 0; representante < ventas.length; representante++) {
          total[mes][producto] += ventas[representante][mes][producto];
        }
      }
    }
    return total;
  }
  
  console.log("Total de ventas por mes y producto:");
  console.log(calcularTotalVentas(ventas));
  
  