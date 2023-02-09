import Head from "next/head"
import Image from "next/image"

function login() {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center 
    md:justify-center md:bg-transparent">
    <img
        src="https://fontmeme.com/permalink/230207/5cff4b7fecd9021f0b04674d015aa0e3.png"
        width={150}
        height={150}
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
    />
    <Head>
        <title>AFTAFLIX</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover" 
        alt={""}    
    />
    <form action="">
        <h1>Sign In</h1>
        <div>
            <label></label>
            <label></label>
        </div>
    </form>
    </div>
  )
}

export default login