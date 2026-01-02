import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <a 
        href="https://github.com/username/repo" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Image
          src="/gambar.png"
          alt="Github Image"
          width={300}
          height={300}
          className="rounded-xl hover:scale-105 transition cursor-pointer shadow-lg"
        />
      </a>
    </main>
  );
}


