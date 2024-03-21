import Image from "next/image";
import Stages from "@/pages/components/Stages";
import { GetServerSideProps } from "next";
import Link from "next/link";

export default function Home({ stages }: any) {
  return (
    <section className="w-full flex  flex-col items-center justify-between px-24 overflow-hidden ">
      <div className="w-full flex gap-20">
        <div className="basis-1/4 pt-8">
          <h2 className="py-6">What is Spiral Dynamics?</h2>
          <p>
            Spiral Dynamics is a captivating map of human development that
            explores the evolving nature of our values, beliefs, and behaviors.
            Imagine a spiral, where each turn represents a distinct stage of
            consciousness that humanity progresses through. From basic survival
            to complex societal structures, and eventually to global
            interconnectedness, Spiral Dynamics outlines how our perspectives
            evolve in response to life's challenges.
          </p>
          <h2 className="py-6">Why it is important?</h2>

          <p>
            This theory isn't just about individual growth; it's a lens through
            which we can understand the movements of societies, businesses, and
            cultures. It reveals why we think and act the way we do, and how our
            collective viewpoints shift over time. This knowledge not only
            enhances personal insight and empathy but also aids in navigating
            complex social dynamics. By grasping the stages of consciousness, we
            can foster better communication and more harmonious relationships,
            making Spiral Dynamics a valuable tool for personal and collective
            development.
          </p>
        </div>
        {/* <Stages stages={stages}/> */}
        <div className="flex flex-col items-center gap-8">
          <h1>Spriral Dynamics AI Assistant</h1>
          <Image
            className="relative animate-spin-slow duration-[5ms] "
            src="/spiral.png"
            alt="spiral"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="basis-1/4 flex flex-col gap-[12rem] pt-8">
          <div>
            <h2 className="py-6">Unveiling Your Worldview</h2>
            <p>
              Discover your worldview through the lens of Spiral Dynamics.
              Uncover the invisible glasses shaping your perception and embark
              on a unique journey of self-understanding.
            </p>
            <h2 className="py-6">Beyond Limitations</h2>
            <p>
              Identify the benefits and boundaries of your current perspective.
              Our AI guides you to envision and reach beyond your present stage.
            </p>
            <h2 className="py-6 wh">The Evolution of Consciousness</h2>
            <p>
              Witness the unfolding evolution of human consciousness. Our AI
              illuminates the path, inviting you to join the continuous flow of
              growth and connection. Embrace the journey to see the world and
              yourself in a new light.
            </p>
          </div>
          <div className="border-2 border-gray-200 py-8 px-12 flex items-center justify-center rounded-lg cursor-pointer">
            <Link href={"/"} className=" font-semibold ">
              Join The Waitlist
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/stages");
  const data = await response.json();

  return {
    props: {
      stages: data.stages,
    },
  };
};
