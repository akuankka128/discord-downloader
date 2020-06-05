const fs = require('fs');
const goOnWithYourLife = () => {};
const fetch = require('node-fetch');

async function download(url) {
	fetch(url)
	.then(res => {
		try {
			let filename = (url.match(/cdn\.discord(?:app)?\.com\/attachments\/\d+\/\d+\/(.*)$/) || url.match(/media\.discord(?:app)?\.net\/attachments\/\d+\/\d+\/(.*)$/))[1];
			fs.writeFileSync("./downloads/" + filename, '');
			const dest = fs.createWriteStream("./downloads/" + filename);
			res.body.pipe(dest);
		} catch(e) {
			goOnWithYourLife();
		}
	});
}

module.exports = download;