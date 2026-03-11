export default function HeroSection() {
  return (
    <section className="space-y-2 bg-cover bg-no-repeat">
      <div className="text-3xl font-medium text-neutral-900 dark:text-neutral-50 arabic-rtl arabic-bold flex items-center justify-between">
        <h1>Hi, I'm Muhammad Hussain</h1>
        <div className="hidden md:block"></div>
      </div>
      
      <div className="space-y-4 arabic-rtl">
        <ul className="list-disc flex flex-col gap-x-10 gap-y-2 text-lg text-neutral-700 dark:text-neutral-400 md:flex-row ltr:ml-5 rtl:mr-5">
          <li>Based in Multan, Pakistan</li>
          <li>Onsite</li>
          <li>Part-time Freelancer</li>
        </ul>
        
        <p className="mt-6 leading-loose text-neutral-600 dark:text-neutral-300 ltr:text-left rtl:text-right arabic-text-base">
          Experienced full-stack web and mobile app developer specializing in the MERN stack along with Next.js and modern UI/UX with Tailwind CSS. I build high-performance ERP and POS systems for SMEs to track and manage their whole business. I build SEO-friendly business websites and GMBs to expand their businesses. I also integrate AI into products, creating chatbots, automation workflows, and AI agents. Passionate about clean architecture, SEO-friendly development, and delivering fast, scalable digital solutions.
        </p>
      </div>
    </section>
  );
}
