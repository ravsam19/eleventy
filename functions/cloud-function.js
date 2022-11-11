export default function handler(_, res) {
  if (process.env.TEST_VARIABLE !== "TEST_VALUE") {
    throw new Error("Env variable not present");
  }

  res
    .status(200)
    .json({ deploymentIdentifier: "contentfly-e2e-tests:b985b85:run-counter-1" })
}