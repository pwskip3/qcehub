import { randomInt } from "crypto";
import dotenv from "dotenv";

dotenv.config();

class QuantumLoadBalancer {
  constructor() {
    this.servers = [];
    this.maxServers = process.env.MAX_SERVERS || 10;
    this.baseLoad = 0.5; // Initial traffic baseline
  }

  addServer(server) {
    if (this.servers.length < this.maxServers) {
      this.servers.push(server);
    }
  }

  removeServer(server) {
    this.servers = this.servers.filter((s) => s !== server);
  }

  dynamicLoadAdjustment(userTraffic) {
    const chaosFactor = Math.sin(userTraffic * Math.PI * 0.5);
    return this.baseLoad + chaosFactor * (1 - this.baseLoad);
  }

  routeUser(userId) {
    const trafficLoad = randomInt(1, 100) / 100;
    const adjustedLoad = this.dynamicLoadAdjustment(trafficLoad);

    const serverIndex = Math.floor(adjustedLoad * this.servers.length);
    return this.servers[serverIndex] || "No available server";
  }
}

export default new QuantumLoadBalancer();
