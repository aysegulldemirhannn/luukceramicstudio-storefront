import { redirect } from "next/navigation";

export default function Root() {
  redirect("/de");  // veya "/home" ya da gitmesini istediğin rota
}