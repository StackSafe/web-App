  import { ethers } from "ethers";
  import { EthersAdapter, SafeFactory, safeSdk } from '@safe-global/protocol-kit';
  import SafeApiKit from '@safe-global/api-kit';
  import { useState } from "react";

  //Protocole Kit Provider : Enable management of Safe Account and Wallet
  export const ProtocolKit = () => {

    const RPC_URL='https://gnosis.api.onfinality.io/public'
    const txServiceUrl = 'https://gnosis.api.onfinality.io/public'

    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [ethAdapter, setEthAdapter] = useState(null);

    const safeService = new SafeApiKit({ txServiceUrl, ethAdapter })

    const [safeFactory, setSafeFactory] = useState(null);
    const [safe, setSafe] = useState(null);
    const [safeAddress, setSafeAddress] = useState(null);

    const [safeTxHash, setSafeTxHash] = useState(null);

    //Retrieve Wallet Data
    const updateEthers = () => {
      try{
        let tempProvider = new ethers.providers.JsonRpcProvider(RPC_URL);
        setProvider(tempProvider);
        console.log(provider);
      } catch(error) {
        console.log(error);
      }

      try{
        let tempSigner = provider.getSigner();
        setSigner(tempSigner);
        console.log(signer);
      } catch(error) {
        console.log(error);
      }

      try{
        let tempEthAdapter = new EthersAdapter({ethers,signerOrProvider: signer})
        setEthAdapter(tempEthAdapter);
        console.log(ethAdapter);
      } catch(error) {
        console.log(error);
      }
    }

    const createSafeAccount = async () => {
      try{
        let tempSafeFactory = await SafeFactory.create({ ethAdapter: ethAdapter });
        setSafeFactory(tempSafeFactory);
        console.log(tempSafeFactory);
      } catch(error) {
        console.log(error);
      }
    }

    const deploySafeAccount = async () => {
      try {
        const safeAccountConfig = {
          owners: [signer.address], 
          threshold: 1, 
          saltNonce: 0
        }
        console.log(safeAccountConfig);

        let tempSafe = safeFactory.deploySafe({ safeAccountConfig });
        setSafe(tempSafe);
        console.log(safe);
      } catch(error) {
        console.log(error);
      }

      try {
        let tempSafeAddress = await safe.getAddress();
        setSafeAddress(tempSafeAddress);
        console.log(safeAddress);

        console.log('Safe Deployed:')
        console.log(`https://gnosis.api.io/address/${safeAddress}`)
        console.log(`https://app.safe.global/gor:${safeAddress}`)
      } catch(error) {
        console.log(error);
      }
    }

    //Send amount of Eth to a Safe Account
    const sendEthToSafe = async (amount) => {
      const safeAmount = ethers.utils.parseUnits(amount, 'ether').toHexString();
      console.log(amount);
      try {
        const transactionParameters = {
          to: safeAddress,
          value: safeAmount
        }

        const tx = await signer.sendTransaction(transactionParameters);
        console.log(`Deposit Transaction: https://gnosis.api.io/tx/${tx.hash}`)
      } catch(error) {
        console.log(error);
      }
    }

    //Create Pending Transaction
    const createSendFromSafe = async (destination, amount) => {
      try{
        let tempAmount = ethers.utils.parseUnits(amount, 'ether').toString();

        const safeTransactionData = {
          to: destination,
          data: '0x',
          value: tempAmount
        }

        const safeTransaction = await safe.createTransaction({ safeTransactionData });
      } catch(error) {
        console.log(error);
      }
    }

    //Execute Pending Transaction
    const executeSendFromSafe = async () => {
      try {
        const pendingTransactions = await safeService.getPendingTransactions(safeAddress).results;
        console.log("Execute this pending transaction :");
        console.log(pendingTransactions);

        let tempSafeTxHash = pendingTransactions[0].safeTxHash;
        setSafeTxHash(tempSafeTxHash);
        console.log("TxHash Transaction :");
        console.log(safeTxHash);

        const safeTransaction = await safeService.getTransaction(safeTxHash)
        const executeTxResponse = await safeSdk.executeTransaction(safeTransaction)
        const receipt = await executeTxResponse.transactionResponse?.wait()

        console.log('Transaction executed:')
        console.log(`https://gnosis.api.io/tx/${receipt.transactionHash}`)
      } catch(error) {
        console.log(error);
      }
    }
  }

  export { provider, signer };