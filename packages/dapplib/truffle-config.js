require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remain eternal install glimpse foster top'; 
let testAccounts = [
"0xb37c802eb24d3171cc6c6dc1cb3f56c20ad52a221aad8e45b5cd3fb2d24b631e",
"0x7510099cf8306976d137b4ff5224a2f40c3137997aa3f419ab309f3fe737257c",
"0x087d35f6c7168df11402443393477b09413228eec82a419a478d3daf9f403552",
"0x92a32673b349c041060b861d812e839e120da3c745461127b20cb3b0c58a2839",
"0xbac0b38bd0c4bef977f94b37f0b17f4dfa1fb138a42054a6fa0ce7effa99fd88",
"0xe08c9be42a99066a4dd18fa566ebdc66b3c4251e7a6d68653e08d72c6da93f9b",
"0x588e469d4ed4ba35b7bf502799ba82a5cdfc27c09a371081606c284b6dc5300b",
"0xed5a2f3ed87662967991be741bd2d86f88be60c32e05cfc0420f1d5692aaf73d",
"0x12dd05026fd6acab70e3f3e6ef8f277b85890fdee025fc4b5a7505bc9fff063e",
"0x24290f5c67f0b5045d2e09b93926cc4fc4e67db5fc2d37a31fe49facf9b3ea5c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


