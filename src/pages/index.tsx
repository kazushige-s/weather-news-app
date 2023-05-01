import { Inter } from "next/font/google";
import { Title } from "./components/Title";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Title />
    </div>
  );
}
