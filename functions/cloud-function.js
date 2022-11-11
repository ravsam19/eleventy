export default function handler(_, res) {
  if (process.env.TEST_VARIABLE !== "TEST_VALUE") {
    throw new Error("Env variable not present");
  }

  res
    .status(200)
    .json({ deploymentIdentifier: "contentfly-e2e-tests:d037310:run-counter-1" })
}