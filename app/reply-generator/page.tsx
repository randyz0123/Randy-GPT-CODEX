const replies = {
  温和跟进: "理解您现在还在比较阶段，我先把核心差异和适配建议发您，您看完后我们再一起确认是否合适。",
  专业成交: "结合您的需求和预算，我建议先从标准方案切入，这样能在可控成本下验证效果并保证交付稳定。",
  强转化推进: "您当前关心的问题都已覆盖，今天确认可锁定本周权益和优先排期，我建议现在先完成下单流程。"
};

export default function ReplyGeneratorPage() {
  return (
    <main className="page">
      <div className="container grid" style={{ gap: 20 }}>
        <h2 style={{ margin: 0 }}>AI 回复生成器 Reply Generator</h2>
        <div className="grid grid-3">
          <section className="card" style={{ gridColumn: "span 2" }}>
            <h3>输入客户问题</h3>
            <textarea
              defaultValue="我想再看看，担心买了不适合。"
              style={{ width: "100%", minHeight: 140, padding: 12, borderRadius: 8, border: "1px solid #cbd5e1" }}
            />
            <div style={{ marginTop: 12 }}>
              <label>客户意向阶段：</label>
              <select style={{ marginLeft: 10, padding: 8, borderRadius: 8 }} defaultValue="高意向">
                <option>初步了解</option>
                <option>中意向</option>
                <option>高意向</option>
              </select>
            </div>
            <button className="btn" style={{ marginTop: 12 }}>生成回复建议</button>
          </section>

          <section className="card">
            <h3>生成结果</h3>
            {Object.entries(replies).map(([tone, text]) => (
              <div key={tone} style={{ marginBottom: 12 }}>
                <p style={{ margin: 0, fontWeight: 700 }}>{tone}</p>
                <p style={{ margin: "4px 0 0", color: "#334155" }}>{text}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
