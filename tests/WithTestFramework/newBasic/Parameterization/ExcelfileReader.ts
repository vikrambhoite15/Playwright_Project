
import * as xlsx from  "xlsx";

export class ExcelFile{

    static readFile(filePath:string,sheetName:string):any{

        //read the data from excel
       const workbook= xlsx.readFile(filePath);

       //select the sheet
       const sheet=workbook.Sheets[sheetName];

       //convert into json
       const data=xlsx.utils.sheet_to_json(sheet);

       return data;
    }
}