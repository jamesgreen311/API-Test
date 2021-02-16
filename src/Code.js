const ss = SpreadsheetApp.openById('11mfnGVNA2PhCs5hsp5-bmKhndv7nFg-ZiVVKf1caTqg');

function doGet() {
    const ws = ss.getSheetByName('Sheet1');  
    const data = ws.getRange("A1").getDataRegion().getValues();
    const headers = data.shift();

    const jsonArray = data.map(r => {
        let obj = {};
        headers.forEach((h, i) => {
            obj[h] = r[i];
        })
        return obj;
    })

    const response = [{status: 200, data: jsonArray}];

    return ContentService
        .createTextOutput(JSON.stringify(response))
        .setMimeType(ContentService.MimeType.JSON);

}

function doPost(e) {
    const body = e.postData.contents;
    const bodyJSON = JSON.parse(body);
    //const ss = SpreadsheetApp.openById('11mfnGVNA2PhCs5hsp5-bmKhndv7nFg-ZiVVKf1caTqg');
    const ws = ss.getSheetByName('Sheet2');
    ws.appendRow([bodyJSON.name]);
}