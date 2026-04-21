import type { ConversationLog, Customer } from "./types";

export const customers: Customer[] = [
  {
    id: "c001",
    name: "林小姐",
    source: "视频号",
    intent: "高",
    stage: "价格确认阶段",
    lastFollow: "2026-04-21 10:20",
    status: "待报价",
    aiAction: "发送分层报价 + 使用场景建议，并在今晚 20:30 前二次确认。",
    summary: "客户认可产品方向，但对价格敏感，担心买贵与效果不稳定。",
    riskAlert: "若今晚未二次触达，客户大概率转向竞品直播间下单。",
    recommendedScript: "林小姐，您关注的稳定性和预算我都记下了。先给您发一版分层方案：先小单验证效果，满意后再升级，不让您一次性承担风险。"
  },
  {
    id: "c002",
    name: "王女士",
    source: "直播间",
    intent: "中",
    stage: "需求澄清阶段",
    lastFollow: "2026-04-21 09:10",
    status: "观望中",
    aiAction: "补充同类型客户案例，优先确认核心诉求再推荐方案。",
    summary: "客户有兴趣但信息不足，当前仍在比价与比较体验差异。",
    riskAlert: "持续只发促销信息会降低信任，建议先做需求确认。",
    recommendedScript: "王女士，我不着急让您下单，先把您最在意的点对齐清楚。您更关注效果速度，还是使用成本？我按您的优先级给建议。"
  },
  {
    id: "c003",
    name: "陈先生",
    source: "老客转介绍",
    intent: "高",
    stage: "成交推进阶段",
    lastFollow: "2026-04-20 20:42",
    status: "待付款",
    aiAction: "发送限时权益与交付排期，推动当日完成支付。",
    summary: "客户转介绍信任基础好，已认可方案，卡点在下单决策时机。",
    riskAlert: "超过 24 小时未推进，成交热度可能明显下降。",
    recommendedScript: "陈先生，您这边方案和排期都确认好了，今天锁单可以优先排产并保留当前权益，我帮您把流程一步到位。"
  },
  {
    id: "c004",
    name: "赵女士",
    source: "社群",
    intent: "低",
    stage: "初步了解阶段",
    lastFollow: "2026-04-19 18:30",
    status: "未明确需求",
    aiAction: "先用问答模板识别真实需求，暂不建议强转化推进。",
    summary: "客户尚未明确痛点，当前处于信息收集与试探阶段。",
    riskAlert: "若频繁催单，可能直接失联。",
    recommendedScript: "赵女士，先不急着选方案，我想先了解您目前最想解决的问题，我再给您一个不绕弯、可落地的建议。"
  }
];

export const conversationLogs: ConversationLog[] = [
  { time: "10:02", role: "客户", text: "我担心效果不稳定，之前踩过坑。" },
  { time: "10:03", role: "销售", text: "理解您的顾虑，我们先对齐可预期效果，再给您适配方案。" },
  { time: "10:04", role: "客户", text: "如果不适合能退吗？" },
  { time: "10:06", role: "销售", text: "可以先小单验证，我们会把售后规则写清楚，您再决定是否升级。" }
];
