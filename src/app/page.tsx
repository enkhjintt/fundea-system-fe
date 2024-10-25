import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import AuthOptions from "./api/auth/[...nextauth]/authOptions";
//ene ni anh haraghad huudsiig zaadag
export default async function RootPage() {
  const session = await getServerSession(AuthOptions);
  session ? redirect("/home") : redirect("/auth/login");
}
