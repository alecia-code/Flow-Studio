import { renderOutreachSvg } from "./lib/outreach-svg.js";
// Temporary visual QA fixture. Fictional business, no Airtable data, no external calls.
// This route should be removed before merging the integration into main.
export default function handler(req,res){
  res.setHeader("Cache-Control","no-store");
  res.setHeader("X-Robots-Tag","noindex, nofollow, noarchive");
  res.setHeader("X-Content-Type-Options","nosniff");
  if(req.method!=="GET") return res.status(405).json({error:"method_not_allowed"});
  const svg=renderOutreachSvg({
    businessName:"Harborview Home Services",
    greeting:"Hi Harborview Home Services team,",
    observation:"This is fictional sample copy for a visual quality check. Imagine a home services company receiving requests by phone and website form, with a team member confirming the appointment later. A shared intake tracker could make each handoff easier to follow.",
    serviceFlow:"REQUEST → INTAKE → FOLLOW-UP → BOOKED",
    industry:"Home Services"
  });
  res.setHeader("Content-Type","image/svg+xml; charset=utf-8");
  res.status(200).send(svg.replace(
    "</svg>",
    '<rect x="12" y="12" width="230" height="25" rx="6" fill="#FCE9AE"/><text x="22" y="30" fill="#5B4000" font-family="Arial,sans-serif" font-size="12" font-weight="700">SAMPLE DESIGN • VISUAL QA ONLY</text></svg>'
  ));
}
