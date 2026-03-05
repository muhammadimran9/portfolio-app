export default function AboutPage() {
  return (
    <div className="main-content mx-5 space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-muted mb-6">
          Full-Stack Developer passionate about building practical digital solutions
        </p>
        
        <div className="prose max-w-none space-y-4">
          <p>
            Hi! I'm Muhammad Imran, a Full-Stack Web & Mobile App Developer. 
            I specialize in MERN stack, Next.js, and modern UI/UX design. 
            I love building products that solve real problems with clean, efficient code.
          </p>
          
          <p>
            My expertise spans both web and mobile development, from responsive interfaces 
            to secure backend architectures. I focus on creating fast, reliable, and SEO-friendly applications.
          </p>
          
          <p>
            What drives me is solving real-world problems through technology. 
            I believe in building solutions that are not just functional, but intuitive and enjoyable to use.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Frontend</h3>
            <p className="text-sm text-muted">
              React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Backend</h3>
            <p className="text-sm text-muted">
              Node.js, Express, MongoDB, REST APIs, GraphQL
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Mobile</h3>
            <p className="text-sm text-muted">
              React Native, Kotlin, Java, KMP
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Tools & Others</h3>
            <p className="text-sm text-muted">
              Git, Docker, CI/CD, AI Integration, Cloud Services
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
