import Link from "next/link";

export default function SiteLogo() {
  return (
    <Link className="site-logo" href="/" aria-label="English Page home">
      <svg className="site-logo-mark" viewBox="0 0 40 40" aria-hidden="true">
        <rect x="1" y="1" width="38" height="38" rx="11" fill="currentColor" />
        <path
          d="M9 12.5c4.2-1.1 8.3-.1 11 2.4v15c-2.7-2.4-6.8-3.4-11-2.4v-15Zm22 0c-4.2-1.1-8.3-.1-11 2.4v15c2.7-2.4 6.8-3.4 11-2.4v-15Z"
          fill="none"
          stroke="#f7f7f1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
        <path d="M20 15v14.5" stroke="#d4e68d" strokeLinecap="round" strokeWidth="1.7" />
      </svg>
      <span className="site-logo-type">english<span className="site-logo-dot">.</span></span>
    </Link>
  );
}