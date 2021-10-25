const { GoogleSpreadsheet } = require('google-spreadsheet');

const url = require("./url.json").url;


class Sheet {
    constructor() {
        this.doc = new GoogleSpreadsheet(url);
    }

    async load() {
        await this.doc.useServiceAccountAuth(require('./credentials.json'));
        await this.doc.loadInfo();
    }

    async addRows(rows, i) {
        const sheet = this.doc.sheetsByIndex[i];
        await sheet.addRows(rows);
    }

    async getRows(i) {
        const sheet = this.doc.sheetsByIndex[i];
        const rows = await sheet.getRows();
        return rows;
    }
}

module.exports = Sheet;