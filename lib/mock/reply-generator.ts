import type { ReplyTone } from "./types";

export const replyTemplates: Record<ReplyTone, string> = {
  温和跟进: "理解您现在还在比较阶段，我先把核心差异和适配建议发您，您看完后我们再一起确认是否合适。",
  专业成交: "结合您的需求和预算，我建议先从标准方案切入，这样能在可控成本下验证效果并保证交付稳定。",
  强转化推进: "您当前关心的问题都已覆盖，今天确认可锁定本周权益和优先排期，我建议现在先完成下单流程。"
};
