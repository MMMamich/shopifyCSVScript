alert("Im working!");

//GLOBAL VARS==========================================================//
var csvFile  = document.querySelector(".csvFile");
var csvParse = document.querySelector(".csvParse");

// csvParse.addEventListener("change", function(){
//   alert("Lets Start Working");
//   // if(csvFile === true){
//   // Papa.parse(csvFile, config);
//   // }
// }, false);

csvFile.addEventListener("change", handleFiles, false);

  function handleFiles(){

    var fileList = this.files;

    Papa.parse(csvFile.files[0], {
      download: true,
      complete: function(results){
        console.log(results);
      }
    });
    
    // if(fileList === ""){
    //   alert("YEA!");
    //
    // }

  }
