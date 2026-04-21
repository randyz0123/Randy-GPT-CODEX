import { replyTemplates } from "@/lib/mock";

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
            {Object.entries(replyTemplates).map(([tone, text]) => (
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
