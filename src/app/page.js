// src/app/page.js
"use client";

import MaterialForm from "@/formulario/MaterialForm";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

export default function Page() {
  return (
    <ChakraProvider>
      <CSSReset />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <MaterialForm />
      </main>
    </ChakraProvider>
  );
}

