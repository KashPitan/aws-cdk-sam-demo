// lib/Lambdas/sampleFunction.ts
import type { Handler, Context } from "aws-lambda";
// run `npm install --save-dev aws-lambda` to add Lambda types

export const handler: Handler = async (_event: unknown, _context: Context) => {
  console.log("Starting the function!");
  return {
    result: "Done!",
  };
};
