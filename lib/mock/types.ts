export type DashboardStat = {
  label: string;
  value: number;
};

export type FunnelStage = {
  stage: string;
  count: number;
};

export type IntentLevel = "高" | "中" | "低";

export type Customer = {
  id: string;
  name: string;
  source: string;
  intent: IntentLevel;
  lastFollow: string;
  status: string;
  aiAction: string;
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

export type ReplyTone = "温和跟进" | "专业成交" | "强转化推进";
