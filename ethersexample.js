const ethers = require('ethers');
const privateKey = '0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef';
const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_PROJECT_ID');
const wallet = new ethers.Wallet(privateKey, provider);
const nonce = await provider.getTransactionCount(wallet.address);
const transaction = { nonce: nonce, to: RECIPIENT_ADDRESS, value: ethers.utils.parseEther('1.0'), gasPrice: ethers.utils.parseUnits('20', 'gwei'), gasLimit: 21000 };
const signedTransaction = await wallet.signTransaction(transaction);
const transactionHash = await provider.sendTransaction(signedTransaction);
console.log('Transaction hash: ' + transactionHash);
