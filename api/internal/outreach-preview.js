import { renderOutreachSvg } from "./lib/outreach-svg.js";
// Preview-only renderer: reads a single Airtable record and returns an SVG.
// It never writes to Airtable, Canva, or an email service.
const BASE="apptpHO2jzDHRjpUo", TABLE="tblB59H8ThSo9yXwL";
const F={name:"fldd277ViRcRDgP9j", evidence:"fldEoToir57OldwCn", opportunity:"flddoB9dLqYT6zUoS", industry:"flduoXAyBakjRb6QQ"};
export default async function handler(req,res){
  res.setHeader("Cache-Control","private, no-store");
  res.setHeader("X-Content-Type-Options","nosniff");
  if(req.method!=="GET") return res.status(405).json({error:"method_not_allowed"});
  const key=process.env.JAS_QUEUE_API_KEY, pat=process.env.AIRTABLE_PAT;
  if(!key||!pat) return res.status(503).json({error:"integration_not_configured"});
  if(req.headers.authorization!==`Bearer ${key}`) return res.status(401).json({error:"unauthorized"});
  const id=typeof req.query.recordId==="string"?req.query.recordId:"";
  if(!/^rec[A-Za-z0-9]{14}$/.test(id)) return res.status(400).json({error:"invalid_record_id"});
  try{
    const response=await fetch(`https://api.airtable.com/v0/${BASE}/${TABLE}/${id}`,{
      headers:{Authorization:`Bearer ${pat}`},signal:AbortSignal.timeout(12000)
    });
    if(!response.ok) return res.status(502).json({error:"airtable_read_failed",status:response.status});
    const {fields={}}=await response.json();
    const name=fields[F.name], evidence=fields[F.evidence], industry=fields[F.industry]||"Service";
    if(!name||!evidence) return res.status(422).json({error:"insufficient_verified_copy"});
    const svg=renderOutreachSvg({
      businessName:name,
      greeting:`Hi ${name} team,`,
      observation:evidence.split(/https?:\/\//)[0].trim(),
      serviceFlow:"REQUEST → INTAKE → FOLLOW-UP → BOOKED",
      industry
    });
    res.setHeader("Content-Type","image/svg+xml; charset=utf-8");
    return res.status(200).send(svg);
  }catch{return res.status(502).json({error:"render_failed"});}
}
