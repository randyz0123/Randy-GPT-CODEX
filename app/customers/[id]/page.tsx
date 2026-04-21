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
            <p>意向：{customer.intent}</p>
            <p>当前状态：{customer.status}</p>
            <p>最近跟进：{customer.lastFollow}</p>
          </section>

          <section className="card">
            <h3>AI 跟进建议</h3>
            <p>{customer.aiAction}</p>
            <h4>推荐销售话术</h4>
            <p>“我理解您最担心的是稳定性，我们先用同类客户的真实案例对齐预期，再给您最适合的方案，不会让您盲目下单。”</p>
          </section>

          <section className="card">
            <h3>下一步行动</h3>
            <ul>
              <li>发送标准报价单与权益说明</li>
              <li>在 24 小时内二次触达确认顾虑</li>
              <li>若确认需求，推进小单试用闭环</li>
            </ul>
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
