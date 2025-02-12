import express from "express";
import { deployToCloudflare } from "../src/services/cloudflareDeploy";
import { authenticate } from "../src/middleware/auth";

const router = express.Router();

router.post("/deploy", authenticate, async (req, res) => {
  try {
    const { projectName, sourceCode } = req.body;
    if (!projectName || !sourceCode) {
      return res.status(400).json({ error: "Project name and source code required" });
    }

    const deploymentURL = await deployToCloudflare(projectName, sourceCode);
    return res.status(200).json({ success: true, url: deploymentURL });
  } catch (error) {
    return res.status(500).json({ error: "Deployment Failed", details: error.message });
  }
});

export default router;
