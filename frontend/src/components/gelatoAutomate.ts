  import { AutomateSDK, isAutomateSupported, TaskTransaction } from "@gelatonetwork/automate-sdk"
  import { provider, signer } from "./protocolKit";
  import { Contract } from "ethers";
  import { COUNTER_ADDRESSES, CHAIN_ID } from "../constants/index";
  import counterAbi from "../constants/counterAbi.json";

  //Gelato client to make automatic call to the swap smart contract each time interval
  const GelatoAutomate = async (tokenA, tokenB, amountIn, amountOutMin, to, deadline, timeInterval) => {

    //ChainId (Gnosis)
    if (!isAutomateSupported(CHAIN_ID[0])) {
      console.log(`Gelato Automate network not supported (${CHAIN_ID[0]})`);
      return;
    }

    if (signer!=null){
      //Init AutomateSDK
      const automate = new AutomateSDK(CHAIN_ID[0], signer);

      //Data Preparation
      console.log("Task Data Automation");
      const counter = new Contract(COUNTER_ADDRESSES[CHAIN_ID[0]], counterAbi, signer);
      const selector = counter.interface.getFunction("swapTokens(address, address, uint256, uint256, address, uint256)");
      const execData = counter.interface.encodeFunctionData("swapToken", [tokenA, tokenB, amountIn, amountOutMin, to, deadline]);
      const startTime = Math.floor(Date.now() / 1000) + 60; // start in 1 minute
      const interval = timeInterval; // exec every timeInterval minutes

      //Gelato Automated Task
      console.log("Creating Task");
      if (selector!=null) {
        const { taskId, tx }: TaskTransaction = await automate.createTask({
          execAddress: counter.address.toString(),
          execSelector: selector.toString(),
          execData,
          execAbi: JSON.stringify(counterAbi),
          startTime,
          interval,
          name: `Automated counter every ${timeInterval} min`,
          dedicatedMsgSender: true,
        });
        await tx.wait();
        console.log(`Task created, taskId: ${taskId} (tx hash: ${tx.hash})`);
        console.log(`> https://app.gelato.network/task/${taskId}?chainId=${CHAIN_ID[0]}`);
    }
      
    } else {
      console.log("Signer null : Retry wallet connection")
    }
  }