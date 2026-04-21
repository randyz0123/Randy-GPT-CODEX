export type DashboardStat = {
  label: string;
  value: number;
  hint?: string;
};

export type FunnelStage = {
  stage: string;
  count: number;
};

export type TeamRisk = {
  level: "高" | "中" | "低";
  title: string;
  detail: string;
};

export type IntentLevel = "高" | "中" | "低";

export type Customer = {
  id: string;
  name: string;
  source: string;
  intent: IntentLevel;
  stage: string;
  lastFollow: string;
  status: string;
  aiAction: string;
  summary: string;
  riskAlert: string;
  recommendedScript: string;
};

export type ConversationLog = {
  time: string;
  role: "客户" | "销售";
  text: string;
};

export type PlaybookSection = {
  title: string;
  points: string[];
};

export type ReplyTone = "温和建立信任" | "专业解释价值" | "推进成交转化";
