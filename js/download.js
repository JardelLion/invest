

function downloadExcel(year) {
    let nameArchive = '';
    if(year == 2022) {
        nameArchive = '2022'

    }
    else if(year == 2023){
        nameArchive = '2023'
    }
    else {
        nameArchive = 'relatorio'
    }

    var link = document.createElement("a");
    link.setAttribute("href", "./archive/2022.xlsx");
    link.setAttribute("download", `${nameArchive}.xlsx`);
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the file
  }