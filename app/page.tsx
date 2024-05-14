/** @format */

import { redirect } from "next/navigation";

export default function Home() {

  redirect("/dashboard");
  
  return (
    <main>
      <p>ventana de inicio</p>
    </main>
  );
}
