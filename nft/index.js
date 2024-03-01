import { getConfig } from "./config.js";

const nearConfig =getConfig("testnet");

const {connect, WalletConnection}= nearApi;
const signInButton =document.getElementById("sign-in-button");

const nearConnection = await connect(nearConfig);
const walletConnection = new WalletConnection(nearConnection);

signInButton.onclick= () => walletConnection.requestSignIn(nearConfig.contarctName);
console.log(nearConnection);