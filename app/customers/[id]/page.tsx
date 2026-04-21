import { conversationLogs, customers } from "@/lib/mock";

type CustomerDetailProps = {
  params: {
    id: string;
  };
};

export default function CustomerDetailPage({ params }: CustomerDetailProps) {
  const customer = customers.find((item) => item.id === params.id) ?? customers[0];

  return (
    <main className="page">
      <div className="container grid" style={{ gap: 16 }}>
        <h2 style={{ margin: 0 }}>客户详情 / {customer.name}</h2>

        <div className="grid grid-3">
          <section className="card">
            <h3>客户画像</h3>
            <p>来源：{customer.source}</p>
            <p>意向等级：{customer.intent}</p>
            <p>当前阶段：{customer.stage}</p>
            <p>最近跟进：{customer.lastFollow}</p>
            <p>当前状态：{customer.status}</p>
          </section>

          <section className="card">
            <h3>历史沟通摘要</h3>
            <p style={{ marginTop: 0 }}>{customer.summary}</p>
            <h4>AI 推荐下一步动作</h4>
            <p>{customer.aiAction}</p>
          </section>

          <section className="card">
            <h3>推荐话术</h3>
            <p>{customer.recommendedScript}</p>
            <h4>风险提醒</h4>
            <p style={{ color: "#991b1b" }}>{customer.riskAlert}</p>
          </section>
        </div>

        <section className="card">
          <h3>历史沟通记录</h3>
          {conversationLogs.map((log) => (
            <div key={`${log.time}-${log.role}`} style={{ padding: "10px 0", borderBottom: "1px solid #e2e8f0" }}>
              <strong>{log.time} · {log.role}</strong>
              <p style={{ margin: "6px 0 0" }}>{log.text}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
