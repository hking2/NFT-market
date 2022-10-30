require('dotenv').config();
// npx hardhat run scripts/deploy/nft1.js --network mumbai

async function main() {
  const nftMarket = await ethers.getContractAt(
    'NftMarket',
    process.env.NFT_MARKET_MUMBAI
  );

  const nftContractFactory = await ethers.getContractFactory('NFT1');
  const nftContract = await nftContractFactory.deploy(
    nftMarket.address,
    'CipherPunx',
    'CPX'
  );
  await nftContract.deployed();
  console.log(`\nNFT1 Contract deployed: ${nftContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
