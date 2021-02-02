import axios from 'axios'
const userAddress = 'TV7wtF3vtEtkniAWUpqqNcj2Zpto24qqXn'

// tronWeb.trx.getBalance(userAddress).then(result => console.log(result))


const contractAddress = 'TQWCJDDNNLeJn8xifRwNQP8r2hwP7Y2JLe'

let TurboMoney


window.addEventListener('load', async function () {
    const tronWeb = window.tronWeb
    const account = tronWeb.defaultAddress
	console.log(account)
	setTimeout(async ()=>{
		axios.get('https://api.shasta.trongrid.io/v1/contracts/TQWCJDDNNLeJn8xifRwNQP8r2hwP7Y2JLe/events').then((res)=>{
			console.log(res)
		});
				userAddress = tronWeb.defaultAddress.base58
		// TurboMoney = await tronWeb.contract().at("TXLzJryMQDLNrzb7rS6sGLtvUkbj4TpZBf");
	    // const owner = await Passive.owner().call();
	    // const deposit = await Passive.getDeposit('TV7wtF3vtEtkniAWUpqqNcj2Zpto24qqXn').call();
		console.log('owner: ', owner)
		console.log(tronWeb.address.fromHex(owner))
		// getDeposit(userAddress)
		// getAllDeposits(userAddress)
	}, 1000);
})
