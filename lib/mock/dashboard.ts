import type { DashboardStat, FunnelStage, TeamRisk } from "./types";

export const dashboardStats: DashboardStat[] = [
  { label: "今日高意向客户", value: 12, hint: "较昨日 +3，集中在复购客群" },
  { label: "待跟进客户", value: 38, hint: "其中 11 位超过 24 小时未回复" },
  { label: "AI 推荐回复", value: 56, hint: "采纳率 71%，主要用于异议处理" },
  { label: "本周转化机会", value: 19, hint: "预计可成交 6~8 单" }
];

export const funnelData: FunnelStage[] = [
  { stage: "新线索", count: 120 },
  { stage: "已触达", count: 86 },
  { stage: "有效沟通", count: 54 },
  { stage: "高意向", count: 21 },
  { stage: "已成交", count: 9 }
];

export const teamRisks: TeamRisk[] = [
  {
    level: "高",
    title: "高意向客户跟进超时",
    detail: "3 位高意向客户超过 12 小时未触达，可能错失当日成交窗口。"
  },
  {
    level: "中",
    title: "价格异议处理不一致",
    detail: "本周 8 次价格异议中，话术口径分散，转化波动较大。"
  },
  {
    level: "低",
    title: "新人破冰回复偏慢",
    detail: "新成员首轮回复平均延迟 6 分钟，建议启用开场模板。"
  }
];
