import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";


export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>Test Project</title>
      </Head>
      <RegisterForm />
    </>
  );
}
