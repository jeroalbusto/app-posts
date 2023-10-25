import Link from "next/link";
import Login from "./Login";

export default async function Nav() {
  return (
    <nav className="flex justify-between">
      <Link href={"/"}>
        <h1>Send it.</h1>
      </Link>

      <ul>
        <Login />
      </ul>
    </nav>
  );
}
