import { ethers } from "ethers";
import { EthersAdapter, SafeAccountConfig, GnosisSafe, SafeFactory } from '@safe-global/protocol-kit';
import SafeApiKit from '@safe-global/api-kit';
import { useState } from "react";

export const ProtocolKit = () => {

  const RPC_URL='https://eth-goerli.public.blastapi.io'

  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [ethAdapter, setEthAdapter] = useState(null);
  const [ownerSigner, setOwnerSigner] = useState(null);

  const [safeFactory, setSafeFactory] = useState(null);
  const [safe, setSafe] = useState(null);
  const [safeAddress, setSafeAddress] = useState(null);

  // Function to retrieve Wallet informations
  const updateEthers = () => {
    try{
      //let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
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

  // Function to create a Safe Account
  const createSafeAccount = async () => {
    try{
      let tempSafeFactory = await SafeFactory.create({ ethAdapter: ethAdapter });
      setSafeFactory(tempSafeFactory);
      console.log(tempSafeFactory);
    } catch(error) {
      console.log(error);
    }
  }

  // Function to deploy the Safe Account
  const deploySafe = async () => {
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
      console.log(error)
    }

    try {
      let tempSafeAddress = await safe.getAddress();
      setSafeAddress(tempSafeAddress);
      console.log(safeAddress);

      console.log('Safe Deployed:')
      console.log(https://goerli.etherscan.io/address/${safeAddress})
      console.log(https://app.safe.global/gor:${safeAddress})
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div>
    </div>
  )
}