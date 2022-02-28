
async function main() {
  
  const Transaction = await hre.ethers.getContractFactory("Transaction");
  const transactions = await transactions.deploy();

  await greeter.deployed();

  console.log("Transactions deployed to:", transactions.address);
}


const runMain = async() =>{
  try{
    await main();
    process.exit(0);
  }catch(error){
    console.error(error);
    process.exit(1);
  }
}
runMain();