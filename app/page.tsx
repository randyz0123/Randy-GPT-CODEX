import Link from "next/link";

const painPoints = [
  "销冠能成交，新人却很难复制同样结果",
  "客户聊了一圈，关键节点容易漏跟进",
  "团队每天很忙，但老板看不到过程问题"
];

const industries = ["美妆快消", "女装", "大健康"];

export default function LandingPage() {
  return (
    <main className="page">
      <div className="container grid" style={{ gap: 20 }}>
        <div className="card" style={{ padding: 32 }}>
          <p className="badge">私域销冠复制智能体</p>
          <h1 className="h1">xiaofen.ai 小粉 AI</h1>
          <p className="subtitle">
            不是多招一个销售，而是帮团队少漏客户、多成交，把销冠打法沉淀成可复制、可训练、可扩张的成交系统。
          </p>
          <div className="hero-cta">
            <Link href="/dashboard" className="btn">申请 30 天试点</Link>
            <Link href="/reply-generator" className="btn btn-secondary">查看核心 Demo</Link>
          </div>
        </div>

        <section className="grid grid-3">
          <div className="card">
            <h3>你可能正在遇到</h3>
            <ul>
              {painPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>xiaofen.ai 带来的改变</h3>
            <ul>
              <li>让新人按销冠节奏跟进，不再靠“感觉聊”</li>
              <li>在关键节点给出下一步动作建议，减少漏单</li>
              <li>把有效话术沉淀成团队资产，持续复用</li>
            </ul>
          </div>
          <div className="card">
            <h3>更适合这些团队</h3>
            <p style={{ marginTop: 0 }}>行业：{industries.join("、")}</p>
            <p style={{ color: "#475569" }}>适合已有私域团队、追求稳定复购和成交效率的业务。</p>
          </div>
        </section>
      </div>
    </main>
  );
}
