const csv = require("csvtojson");

const csvFilePath =
  "./string-format.csv";

var items = [];

async function parseCsvToJson() {
  let row;
  await csv()
    .fromFile(csvFilePath)
    .then((fileItems) => {
      for (let i = 0; i < fileItems.length; i++) {
        row = fileItems[i];

        let item = {
          PutRequest: {
            Item: {
              ...row,
            },
          },
        };

        items.push(item);
      }
    });
  console.log(JSON.stringify(items));
}

parseCsvToJson();
