import { Navigation } from '@/components';

export default function Projects() {
  return (
    <main className='bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0'>
      <Navigation />
      <div className='container flex items-center justify-center min-h-screen h-full px-4 mx-auto'>
        <h1 className='z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text'>
          Coming Soon
        </h1>
      </div>
    </main>
  );
}
