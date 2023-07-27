import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import LoginForm from '@/components/LoginForm'


export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Test Project</title>
      </Head>
      <LoginForm />
      
      
    </>
  )
}
