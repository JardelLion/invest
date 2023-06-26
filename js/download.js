

function downloadExcel(archiveName) {
   

    var link = document.createElement("a");
    link.setAttribute("href",`./archive/${archiveName}.xlsx`);
    link.setAttribute("download", `${archiveName}.xlsx`);
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the file
  }