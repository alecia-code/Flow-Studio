// Server-only JAS outreach SVG generator. No external image, Canva, or email dependencies.
// Intended for a protected preview integration, not public deployment.
const escape = (v) => String(v ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;" }[c]));
const wrap = (value, limit=57, maxLines=6) => {
  const words=String(value||"").trim().split(/\s+/), lines=[]; let line="";
  for(const word of words){const next=(line ? line+" ":"")+word;if(next.length>limit && line){lines.push(line);line=word;}else line=next;}
  if(line) lines.push(line);
  return lines.slice(0,maxLines).map((line,i)=>lines.length>maxLines && i===maxLines-1 ? line.slice(0,-1)+"…" : line);
};
const block=(lines,x,y,lineHeight=27)=>lines.map((t,i)=>`<tspan x="${x}" y="${y+i*lineHeight}">${escape(t)}</tspan>`).join("");
export function renderOutreachSvg({businessName, greeting, observation, serviceFlow, industry="Service business"}){
  const company=String(businessName||"").trim().slice(0,90);
  if(!company) throw new Error("business_name_required");
  const hello=String(greeting||`Hi ${company} team,`).slice(0,100);
  const intro=String(observation||"").trim();
  if(!intro) throw new Error("personalized_observation_required");
  const flow=String(serviceFlow||"REQUEST → INTAKE → FOLLOW-UP → BOOKED").slice(0,130);
  const titleLines=wrap(`A personalized idea for ${company}`,40,2);
  const bodyLines=wrap(intro,66,7);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="1738" viewBox="0 0 640 1738" role="img" aria-label="${escape("Jenna Alecia Studios service flow concept for "+company)}">
<rect width="640" height="1738" fill="#F7FAFD"/>
<rect width="640" height="252" fill="#102B4E"/>
<text x="44" y="54" fill="#B8D4E9" font-family="Arial,sans-serif" font-size="13" font-weight="700" letter-spacing="2">A SERVICE FLOW CONCEPT</text>
<text x="596" y="54" text-anchor="end" fill="#FFFFFF" font-family="Arial,sans-serif" font-size="14" font-weight="700">Jenna Alecia Studios</text>
<text x="44" y="118" fill="#FFFFFF" font-family="Arial,sans-serif" font-size="33" font-weight="700">What if every request</text>
<text x="44" y="159" fill="#FFFFFF" font-family="Arial,sans-serif" font-size="33" font-weight="700">had a clear next step?</text>
<text x="44" y="203" fill="#D5E9F7" font-family="Arial,sans-serif" font-size="17">${block(titleLines,44,203,23)}</text>
<rect x="44" y="290" width="552" height="235" rx="17" fill="#E6F1F9" stroke="#C5DCEB"/>
<text x="320" y="336" text-anchor="middle" fill="#153A5F" font-family="Arial,sans-serif" font-size="13" font-weight="700" letter-spacing="2">${escape(industry.toUpperCase().slice(0,45))} INTAKE FLOW</text>
<rect x="72" y="365" width="496" height="106" rx="13" fill="#FFFFFF"/>
<text x="320" y="411" text-anchor="middle" fill="#163B5D" font-family="Arial,sans-serif" font-size="17" font-weight="700">${escape(flow.slice(0,53))}</text>
<text x="320" y="443" text-anchor="middle" fill="#55718A" font-family="Arial,sans-serif" font-size="12">Illustrative concept, customized after a workflow review</text>
<text x="44" y="571" fill="#183E64" font-family="Arial,sans-serif" font-size="25" font-weight="700">A smoother experience for your customers.</text>
<text x="44" y="606" fill="#183E64" font-family="Arial,sans-serif" font-size="25" font-weight="700">A clearer workflow for your team.</text>
<text x="44" y="679" fill="#102B4E" font-family="Arial,sans-serif" font-size="18" font-weight="700">${escape(hello)}</text>
<text x="44" y="725" fill="#263F58" font-family="Arial,sans-serif" font-size="16">${block(bodyLines,44,725,26)}</text>
<text x="44" y="948" fill="#263F58" font-family="Arial,sans-serif" font-size="16">I run Jenna Alecia Studios, where I build streamlined intake</text>
<text x="44" y="974" fill="#263F58" font-family="Arial,sans-serif" font-size="16">and follow-up systems for service businesses.</text>
<rect x="44" y="1020" width="264" height="193" rx="14" fill="#E9F3FA"/>
<rect x="332" y="1020" width="264" height="193" rx="14" fill="#E9F3FA"/>
<text x="64" y="1062" fill="#153A5F" font-family="Arial,sans-serif" font-size="20" font-weight="700">For your customers</text>
<text x="64" y="1104" fill="#314D66" font-family="Arial,sans-serif" font-size="15">An easier way to request service,</text>
<text x="64" y="1128" fill="#314D66" font-family="Arial,sans-serif" font-size="15">share details, and understand</text>
<text x="64" y="1152" fill="#314D66" font-family="Arial,sans-serif" font-size="15">what happens next.</text>
<text x="352" y="1062" fill="#153A5F" font-family="Arial,sans-serif" font-size="20" font-weight="700">For your team</text>
<text x="352" y="1104" fill="#314D66" font-family="Arial,sans-serif" font-size="15">See incoming requests, pending</text>
<text x="352" y="1128" fill="#314D66" font-family="Arial,sans-serif" font-size="15">follow-ups, and confirmed</text>
<text x="352" y="1152" fill="#314D66" font-family="Arial,sans-serif" font-size="15">appointments in one place.</text>
<text x="44" y="1285" fill="#173C61" font-family="Arial,sans-serif" font-size="24" font-weight="700">Curious what it would take to build this?</text>
<text x="44" y="1330" fill="#304C65" font-family="Arial,sans-serif" font-size="16">My short Service Flow Check recommends a starting scope</text>
<text x="44" y="1358" fill="#304C65" font-family="Arial,sans-serif" font-size="16">and preliminary price range based on your current process.</text>
<a href="https://tally.so/r/Arr5Oe" target="_blank"><rect x="44" y="1392" width="360" height="61" rx="12" fill="#1D5A8B"/><text x="224" y="1430" text-anchor="middle" fill="#FFFFFF" font-family="Arial,sans-serif" font-size="17" font-weight="700">Explore the Service Flow Check</text></a>
<text x="44" y="1532" fill="#314D66" font-family="Arial,sans-serif" font-size="17">Best,</text>
<text x="44" y="1558" fill="#314D66" font-family="Arial,sans-serif" font-size="17">Jenna</text>
<text x="44" y="1585" fill="#314D66" font-family="Arial,sans-serif" font-size="15">Jenna Alecia Studios</text>
<rect x="0" y="1666" width="640" height="72" fill="#102B4E"/>
<text x="320" y="1708" text-anchor="middle" fill="#C7DEEE" font-family="Arial,sans-serif" font-size="12" letter-spacing="1">PERSONALIZED DRAFT | FOR REVIEW | NOT SENT</text>
</svg>`;
}
