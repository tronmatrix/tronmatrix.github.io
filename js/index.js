import axios from 'axios'
const userAddress = 'TGAYUq6GEConL96N4BXQMdTLALcGtcvBBk'

// tronWeb.trx.getBalance(userAddress).then(result => console.log(result))


const contractAddress = 'TGAYUq6GEConL96N4BXQMdTLALcGtcvBBk'

let TurboMoney


window.addEventListener('load', async function () {
    const tronWeb = window.tronWeb
    const account = tronWeb.defaultAddress
	console.log(account)
	setTimeout(async ()=>{
		axios.get('https://api.shasta.trongrid.io/v1/contracts/TGAYUq6GEConL96N4BXQMdTLALcGtcvBBk/events').then((res)=>{
			console.log(res)
		});
				userAddress = tronWeb.defaultAddress.base58
		// TurboMoney = await tronWeb.contract().at("TGAYUq6GEConL96N4BXQMdTLALcGtcvBBk");
	    // const owner = await Passive.owner().call();
	    // const deposit = await Passive.getDeposit('TGAYUq6GEConL96N4BXQMdTLALcGtcvBBk').call();
		console.log('owner: ', owner)
		console.log(tronWeb.address.fromHex(owner))
		// getDeposit(userAddress)
		// getAllDeposits(userAddress)
	}, 1000);
})
