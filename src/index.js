import { h, render } from "preact";
// import "preact/devtools";
import App from "./App";
import "./styles";

const mountNode = document.getElementById("root");

render(<App />, mountNode, mountNode.lastChild);
