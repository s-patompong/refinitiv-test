const axios = require('axios');
const cheerio = require('cheerio');

if (!process.argv[2]) {
  console.log('Please enter the fund name');
  return;
}

const fundName = process.argv[2].trim();

const url = 'https://codequiz.azurewebsites.net/';
axios.get(url, {
  headers: {
    // The page require hasCookie to set as true to see the table
    Cookie: "hasCookie=true"
  }
}).then(({data}) => {
  const $ = cheerio.load(data);
  let navData = [];

  $('tr').each(function() {
    const name = $(this).find('td:first').text().trim();
    const nav = $(this).find('td:nth-child(2)').text().trim();
    if (name === '') return; // Ignore the first row
    navData.push({ name, nav });
  });

  const target = navData.find(n => n.name === fundName);
  if (target) {
    console.log(target.nav);
  } else {
    console.log("Nav not found.");
  }
});