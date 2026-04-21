import Link from "next/link";

const links = [
  ["首页", "/"],
  ["工作台", "/dashboard"],
  ["客户列表", "/customers"],
  ["话术知识库", "/playbook"],
  ["AI 回复生成器", "/reply-generator"]
];

export function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" style={{ fontWeight: 700 }}>xiaofen.ai 小粉 AI</Link>
        <nav className="nav-links">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
