import fetch from 'node-fetch';
import { HttpsProxyAgent } from 'https-proxy-agent';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Access environment variables
const userName = process.env.USERNAME;
const password = process.env.PASS;

// Proxy configuration
const proxyAgent = new HttpsProxyAgent(
  `http://${userName}:${password}@proxy.proxy-cheap.com:31112`
);

// Making the request
fetch('https://ipv4.icanhazip.com', { agent: proxyAgent })
  .then((response) => response.text())
  .then((text) => console.log(text))
  .catch((error) => console.error('Error:', error));
