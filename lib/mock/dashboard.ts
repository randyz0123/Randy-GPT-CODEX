import type { DashboardStat, FunnelStage } from "./types";

export const dashboardStats: DashboardStat[] = [
  { label: "今日待跟进客户数", value: 38 },
  { label: "高意向客户数", value: 12 },
  { label: "AI 推荐回复数", value: 56 },
  { label: "本周转化机会", value: 19 }
];

export const funnelData: FunnelStage[] = [
  { stage: "新线索", count: 120 },
  { stage: "已触达", count: 86 },
  { stage: "有效沟通", count: 54 },
  { stage: "高意向", count: 21 },
  { stage: "已成交", count: 9 }
];
