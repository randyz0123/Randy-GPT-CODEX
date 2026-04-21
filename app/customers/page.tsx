import Link from "next/link";
import { customers } from "@/lib/mock";

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
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td><Link href={`/customers/${customer.id}`} style={{ color: "#2563eb" }}>{customer.name}</Link></td>
                  <td>{customer.source}</td>
                  <td><span className={`badge ${customer.intent === "高" ? "high" : customer.intent === "中" ? "warn" : ""}`}>{customer.intent}</span></td>
                  <td>{customer.lastFollow}</td>
                  <td>{customer.status}</td>
                  <td>{customer.aiAction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
