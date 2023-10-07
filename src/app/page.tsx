import Link from 'next/link';
import { Particles } from '@/components';

const navigation = [
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to black'>
      <nav className='my-8'>
        <ul className='flex items-center justify-center gap-4'>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-sm text-zinc-500 duration-500 hover:text-zinc-300'
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <Particles className='absolute inset-0 -z-10 animate-fade-in' />
      <h1 className='z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text'>
        raposo
      </h1>
      <h2 className='text-sm text-zinc-500 my-8'>
        Hi, my name is Gabriel, I&rsquo;m currently working at Kunai as a
        Fullstack Engineer.
      </h2>
    </main>
  );
}
