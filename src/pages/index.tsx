import { Inter } from "next/font/google";
import { Title } from "./components/Title";
import { Form } from "./components/Form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Title />
      <Form />
    </div>
  );
}
