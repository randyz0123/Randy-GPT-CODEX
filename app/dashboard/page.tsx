import { dashboardStats, funnelData } from "@/lib/mock";

export default function DashboardPage() {
  return (
    <main className="page">
      <div className="container grid" style={{ gap: 20 }}>
        <h2 style={{ margin: 0 }}>工作台 Dashboard</h2>
        <section className="grid grid-4">
          {dashboardStats.map((item) => (
            <div key={item.label} className="card">
              <p style={{ margin: 0, color: "#64748b", fontSize: 14 }}>{item.label}</p>
              <p style={{ margin: "8px 0 0", fontSize: 28, fontWeight: 700 }}>{item.value}</p>
            </div>
          ))}
        </section>

        <section className="card">
          <h3>销售跟进漏斗</h3>
          <div className="grid grid-4">
            {funnelData.map((item) => (
              <div key={item.stage} style={{ background: "#f8fafc", borderRadius: 10, padding: 12 }}>
                <p style={{ margin: 0, color: "#64748b", fontSize: 13 }}>{item.stage}</p>
                <p style={{ margin: "6px 0 0", fontWeight: 700, fontSize: 24 }}>{item.count}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
