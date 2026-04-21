import { replyTemplates } from "@/lib/mock";

export default function ReplyGeneratorPage() {
  return (
    <main className="page">
      <div className="container grid" style={{ gap: 20 }}>
        <h2 style={{ margin: 0 }}>AI 回复生成器 / 一键给出更像销冠的下一句</h2>
        <p style={{ margin: 0, color: "#475569" }}>目标不是“说得花”，而是帮助团队在关键节点少走弯路、少漏客户、稳步推进成交。</p>

        <div className="grid grid-3">
          <section className="card" style={{ gridColumn: "span 2" }}>
            <h3>输入客户问题</h3>
            <textarea
              defaultValue="我想再看看，担心买了不适合，而且预算也有限。"
              style={{ width: "100%", minHeight: 140, padding: 12, borderRadius: 8, border: "1px solid #cbd5e1" }}
            />
            <div style={{ marginTop: 12 }}>
              <label>选择客户阶段：</label>
              <select style={{ marginLeft: 10, padding: 8, borderRadius: 8 }} defaultValue="高意向">
                <option>初步了解</option>
                <option>需求确认</option>
                <option>高意向</option>
                <option>待成交</option>
              </select>
            </div>
            <button className="btn" style={{ marginTop: 12 }}>生成 3 种回复风格</button>
          </section>

          <section className="card">
            <h3>生成结果</h3>
            {Object.entries(replyTemplates).map(([tone, text]) => (
              <div key={tone} style={{ marginBottom: 16 }}>
                <p style={{ margin: 0, fontWeight: 700 }}>{tone}</p>
                <p style={{ margin: "6px 0 0", color: "#334155", lineHeight: 1.6 }}>{text}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
