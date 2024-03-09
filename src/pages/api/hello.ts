// @ts-nocheck
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import babelPlugin from "../../babel-plugin";
import { transformSync } from "@babel/core";
import generator from "@babel/generator";
type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const transformedCode = transformSync(req.body, {
    // add support for JSX
    presets: ["@babel/preset-react"],
    plugins: [babelPlugin],
    ast: true,
  });
  const result = generator(transformedCode.ast, { sourceType: "module" });
  res.status(200).json({ code: result });
}
