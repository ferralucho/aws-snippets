const csv = require("csvtojson");

const csvFilePath =
  "./string-lookup-alert-format.csv";

var items = [];

async function parseCsvToJson() {
  await csv({ noheader: false })
    .fromFile(csvFilePath)
    .then((row) => {
      var item = {
        PutRequest: {
          Item: {
            classification: row[0],
            idSort: row[1],
            alertDefn: row[2],
            createdAt: row[3],
            eventId: row[4],
            id: row[5],
            kbArticles: row[6],
            locale: row[7],
            localeSort: row[8],
            msgPrivate: row[9],
            msgPublic: row[10],
            severity: row[11],
            title: row[12],
          },
        },
      };

      items.push(item);
    });
    console.log(JSON.stringify(items));
}

parseCsvToJson();
