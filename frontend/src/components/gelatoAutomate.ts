  import { AutomateSDK, isAutomateSupported, TaskTransaction } from "@gelatonetwork/automate-sdk"
  import { signer } from "./protocolKit";
  import { Contract } from "ethers";
  import { COUNTER_ADDRESSES } from "../constants/index";
  import counterAbi from "../constants/counterAbi.json";

  //Gelato client to make automatic call to the swap smart contract each time interval
  const GelatoAutomate = async (contractAddress, amount, timeInterval) => {
    
    //ChainId (Gnosis)
    const chainId = 100;
    if (!isAutomateSupported(chainId)) {
      console.log(`Gelato Automate network not supported (${chainId})`);
      return;
    }

    if (signer!=null){
      //Init AutomateSDK
      const automate = new AutomateSDK(chainId, signer);

      //Data Preparation
      console.log("Task Data Automation");
      const counter = new Contract(COUNTER_ADDRESSES[chainId], counterAbi, signer);
      const selector = counter.interface.getSighash("function to call in SM");
      const execData = counter.interface.encodeFunctionData("function to call is SM");
      const startTime = Math.floor(Date.now() / 1000) + 60; // start in 1 minute
      const interval = timeInterval * 60; // exec every timeInterval minutes

      //Gelato Automated Task
      console.log("Creating Task");
      const { taskId, tx }: TaskTransaction = await automate.createTask({
        execAddress: counter.address,
        execSelector: selector,
        execData,
        execAbi: JSON.stringify(counterAbi),
        startTime,
        interval,
        name: `Automated counter every ${timeInterval} min`,
        dedicatedMsgSender: true,
      });

      await tx.wait();
      console.log(`Task created, taskId: ${taskId} (tx hash: ${tx.hash})`);
      console.log(`> https://app.gelato.network/task/${taskId}?chainId=${chainId}`);
    } else {
      console.log("Signer null : Retry wallet connection")
    }
  }