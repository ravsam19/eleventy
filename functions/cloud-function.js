export default function handler(req, res) {
  res
    .status(200)
    .json({ deploymentIdentifier: req.query.deploymentIdentifier })
}