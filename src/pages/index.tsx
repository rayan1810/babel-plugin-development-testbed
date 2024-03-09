import Image from "next/image";
import { Inter } from "next/font/google";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-dark.css";
import { use, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [inputCode, setInputCode] = useState(
    `import React from 'react';
import { Text, View,Box } from 'react-native-ustyle';

export default function App() {
  return (
    <View abc="2" {...x} bg="$colors$yellow500" p={"-$space$px"} mx={20} roundedBottom={4}>
      <Box>
    </Box>  
      <Text c="$colors$blue">Open up App.js to start working on your app!</Text>
    </View>
  );
}      
`
  );
  const [outputCode, setOutputCode] = useState(
    `import React from 'react';
import { Text, View,Box } from 'react-native-ustyle';

export default function App() {
  return (
    <View abc="2" {...x} bg="$colors$yellow500" p={"-$space$px"} mx={20} roundedBottom={4}>
      <Box>
    </Box>  
      <Text c="$colors$blue">Open up App.js to start working on your app!</Text>
    </View>
  );
}      
`
  );

  return (
    <main
      className={`flex min-h-screen flex-col items-center  pt-24 px-4 pb-4 ${inter.className}`}
    >
      <h1 className="text-4xl font-bold">Babel Test</h1>
      <p className="text-lg">
        To test your babel plugin, update the babel plugin in{" "}
        <code className="font-mono bg-slate-800 p-1">pages/index.tsx</code>
      </p>
      <div className="flex flex-row flex-1 w-full gap-3">
        <Editor
          value={inputCode}
          onValueChange={async (code) => {
            setInputCode(code);
            const res = await fetch("/api/hello", {
              method: "POST",
              body: code,
            });
            const data = await res.json();
            setOutputCode(data.code.code);
          }}
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
          className="p-2 border border-gray-400 rounded-md bg-slate-900  w-full text-white focus:outline-none focus:border-blue-500"
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
            overflow: "scroll",
          }}
        />

        <Editor
          value={outputCode}
          onValueChange={(code) => {
            setOutputCode(code);
          }}
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
          className="p-2 border border-gray-400 rounded-md bg-slate-900  w-full text-white focus:outline-none focus:border-blue-500"
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
            overflow: "scroll",
          }}
        />
      </div>
    </main>
  );
}
