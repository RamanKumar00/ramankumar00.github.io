import * as React from "react"

export function AtIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={32} height={32} {...props}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <path d="M16 15v-2a4 4 0 10-2 3.464" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 13a2 2 0 11-2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="8" y="17" fontSize="10" fill="currentColor" fontFamily="monospace">@</text>
    </svg>
  );
} 