function database() {
    var mysql = require('mysql');
  
    var con = mysql.createConnection({
      host: "34.132.237.95",
      user: "root",
      password: "SenFiap#22",
      database: "db_energymeter"
    });
  
    con.connect(function (err) {
      if (err) throw err;
      //Select only "name" and "address" from "customers":
      con.query("Select Extract(hour from data_consumo) as hora, sum(kWh) from consumo where date(data_consumo) = '2022-10-04' group by Extract(hour from data_consumo)", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
    });
    return fields;
  }