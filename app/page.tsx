import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="page">
      <div className="container">
        <div className="card" style={{ padding: 32 }}>
          <p className="badge">私域销冠复制智能体</p>
          <h1 className="h1">xiaofen.ai 小粉 AI</h1>
          <p className="subtitle">不是多招一个销售，而是把销冠能力变成可复制、可训练、可扩张的成交系统。</p>
          <p style={{ color: "#334155" }}>适合客户：美妆快消、女装、大健康、电商私域团队。</p>
          <div className="hero-cta">
            <Link href="/dashboard" className="btn">申请试点</Link>
            <Link href="/customers/c001" className="btn btn-secondary">查看 Demo</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
