import { dashboardStats, funnelData, teamRisks } from "@/lib/mock";

export default function DashboardPage() {
  return (
    <main className="page">
      <div className="container grid" style={{ gap: 20 }}>
        <h2 style={{ margin: 0 }}>老板看板 / 今日私域成交进展</h2>

        <section className="grid grid-4">
          {dashboardStats.map((item) => (
            <div key={item.label} className="card">
              <p style={{ margin: 0, color: "#64748b", fontSize: 14 }}>{item.label}</p>
              <p style={{ margin: "8px 0 6px", fontSize: 28, fontWeight: 700 }}>{item.value}</p>
              <p style={{ margin: 0, color: "#475569", fontSize: 13 }}>{item.hint}</p>
            </div>
          ))}
        </section>

        <section className="card">
          <h3>销售漏斗（本周）</h3>
          <div className="grid grid-4">
            {funnelData.map((item) => (
              <div key={item.stage} style={{ background: "#f8fafc", borderRadius: 10, padding: 12 }}>
                <p style={{ margin: 0, color: "#64748b", fontSize: 13 }}>{item.stage}</p>
                <p style={{ margin: "6px 0 0", fontWeight: 700, fontSize: 24 }}>{item.count}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <h3>团队跟进风险提醒</h3>
          <div className="grid grid-3">
            {teamRisks.map((risk) => (
              <div key={risk.title} style={{ border: "1px solid #e2e8f0", borderRadius: 10, padding: 12 }}>
                <p className={`badge ${risk.level === "高" ? "high" : risk.level === "中" ? "warn" : ""}`}>{risk.level}风险</p>
                <p style={{ margin: "8px 0 4px", fontWeight: 600 }}>{risk.title}</p>
                <p style={{ margin: 0, color: "#475569", fontSize: 14 }}>{risk.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
