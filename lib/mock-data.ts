export const dashboardStats = [
  { label: "今日待跟进客户数", value: 38 },
  { label: "高意向客户数", value: 12 },
  { label: "AI 推荐回复数", value: 56 },
  { label: "本周转化机会", value: 19 }
];

export const funnelData = [
  { stage: "新线索", count: 120 },
  { stage: "已触达", count: 86 },
  { stage: "有效沟通", count: 54 },
  { stage: "高意向", count: 21 },
  { stage: "已成交", count: 9 }
];

export const customers = [
  { id: "c001", name: "林小姐", source: "视频号", intent: "高", lastFollow: "2026-04-21 10:20", status: "待报价", aiAction: "发送组合套餐报价并确认发货时效" },
  { id: "c002", name: "王女士", source: "直播间", intent: "中", lastFollow: "2026-04-21 09:10", status: "观望中", aiAction: "补充真实案例，强调适配人群" },
  { id: "c003", name: "陈先生", source: "老客转介绍", intent: "高", lastFollow: "2026-04-20 20:42", status: "待付款", aiAction: "发送限时权益，推进当日转化" },
  { id: "c004", name: "赵女士", source: "社群", intent: "低", lastFollow: "2026-04-19 18:30", status: "未明确需求", aiAction: "先进行需求澄清，避免强推" }
];

export const conversationLogs = [
  { time: "10:02", role: "客户", text: "我担心效果不稳定，之前踩过坑。" },
  { time: "10:03", role: "销售", text: "理解您的顾虑，我们可以先看同类客户的真实反馈。" },
  { time: "10:04", role: "客户", text: "如果不适合能退吗？" }
];
