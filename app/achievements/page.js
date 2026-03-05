export default function AchievementsPage() {
  const achievements = [
    { title: "Full-Stack Developer", description: "Expert in MERN stack and modern web technologies" },
    { title: "Mobile Developer", description: "Proficient in React Native and cross-platform development" },
    { title: "Problem Solver", description: "Strong analytical and debugging skills" }
  ];

  return (
    <div className="main-content mx-5 space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Achievements</h1>
        <p className="text-lg text-muted mb-8">
          My professional accomplishments and milestones
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
              <p className="text-sm text-muted">{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
