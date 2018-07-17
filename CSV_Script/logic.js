var Papa = require('papaparse');
alert("Im working!");

//GLOBAL VARS==========================================================//
var csvFile     = document.querySelector(".csvFile");
var csvParse    = document.querySelector(".csvParse");

csvFile.addEventListener("change", handleFiles, false);

  function handleFiles(){

    var fileList = this.files;

    //Parse User's CSV
    Papa.parse(csvFile.files[0], {
      download: true,
      complete: function(results){
        console.log(results);
      }
    });

    //Parse's Shopify's CSV
    Papa.parse(csv, {
      download: true,
      complete: function(results){
        console.log(results);
      }
    });

    if(fileList === ""){
      alert("YEA!");

    }

  }
