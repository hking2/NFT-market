require('dotenv').config();
// npx hardhat run scripts/deploy/nft2.js --network mumbai

async function main() {
  const nftMarket = await ethers.getContractAt(
    'NftMarket',
    process.env.NFT_MARKET_MUMBAI
  );

  const nftContractFactory = await ethers.getContractFactory('NFT2');
  const nftContract = await nftContractFactory.deploy(nftMarket.address);
  await nftContract.deployed();
  console.log(`\nNFT2 Contract deployed: ${nftContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
