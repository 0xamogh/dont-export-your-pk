import { Interface } from "ethers/lib/utils";

export function generateExecutionUrl(
  contractAbi: string,
  functionName: string,
  functionArguments: string[],
  to: string,
  from: string,
  chainId: any,
  value?: any
) {
  const iface = new Interface(contractAbi);
  const txData = iface.encodeFunctionData(functionName, functionArguments);
  txData["to"] = to;
  txData["from"] = from;
  txData["chainId"] = chainId;
  if (value) txData["value"] = value;
  else txData["value"] = "0x00";

  const url = `https://dontexportyourpk.netlify.app/?to=${to}&from=${from}&chainId=${chainId}&value=${value}`;
  console.log("Click this link to deploy : ", url);
}
