export default function handler(req, res) {
  if (process.env.envVariable !== "something") {
    throw new Error("Something");
  }

  res
    .status(200)
    .json({ deploymentIdentifier: req.query.deploymentIdentifier })
}