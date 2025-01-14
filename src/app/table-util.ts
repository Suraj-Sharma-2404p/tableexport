import * as XLSX from "xlsx";

const getFileName = (name: string) => {
    let timeSpan = new Date().toISOString();
    let sheetName = name || "ExportResult";
    let fileName = `${sheetName}-${timeSpan}`;
    return {
      sheetName,
      fileName
    };
  };

export class TableUtil {
    static exportTableToExcel(tableId: string, name: any) {
        let { sheetName, fileName } = getFileName(name);
        let targetTableElm = document.getElementById(tableId);
        let wb = XLSX.utils.table_to_book(targetTableElm, <XLSX.Table2SheetOpts>{
          sheet: sheetName
        });
        XLSX.writeFile(wb, `${fileName}.xlsx`);
      }
}
