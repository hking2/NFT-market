const { ethers } = require('ethers');
require('dotenv').config();
// npx hardhat run scripts/exchange/createSale.js --network mumbai

const main = async () => {
  const market = await hre.ethers.getContractAt(
    'NftMarket2',
    process.env.NFT_MARKET_MUMBAI
  );

  const tokenId = 2;

  let tx = await market.createOnSaleNFT(
    process.env.NFT_CONTRACT2_MUMBAI,
    tokenId,
    ethers.utils.parseEther('0.05')
  );
  await tx.wait();

  console.log('Sale created');
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
