import Link from "next/link";
import { customers } from "@/lib/mock-data";

export default function CustomersPage() {
  return (
    <main className="page">
      <div className="container grid" style={{ gap: 20 }}>
        <h2 style={{ margin: 0 }}>客户列表 Customers</h2>
        <div className="card" style={{ padding: 0, overflow: "auto" }}>
          <table className="table">
            <thead>
              <tr>
                <th>客户姓名</th>
                <th>来源</th>
                <th>意向等级</th>
                <th>最近跟进时间</th>
                <th>当前状态</th>
                <th>AI 建议动作</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.id}>
                  <td><Link href={`/customers/${c.id}`} style={{ color: "#2563eb" }}>{c.name}</Link></td>
                  <td>{c.source}</td>
                  <td><span className={`badge ${c.intent === "高" ? "high" : c.intent === "中" ? "warn" : ""}`}>{c.intent}</span></td>
                  <td>{c.lastFollow}</td>
                  <td>{c.status}</td>
                  <td>{c.aiAction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
