import { playbookSections } from "@/lib/mock";

export default function PlaybookPage() {
  return (
    <main className="page">
      <div className="container grid" style={{ gap: 20 }}>
        <h2 style={{ margin: 0 }}>话术知识库 Sales Playbook</h2>
        <div className="grid grid-3">
          {playbookSections.map((section) => (
            <section className="card" key={section.title}>
              <h3>{section.title}</h3>
              <ul>
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
