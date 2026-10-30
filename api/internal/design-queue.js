// Internal read-only design queue endpoint. No Canva calls, writes, or email sends.
// Configure JAS_QUEUE_API_KEY and AIRTABLE_PAT as Vercel environment secrets.
// This endpoint is intentionally disabled until both secrets are set.
const BASE = "apptpHO2jzDHRjpUo";
const TABLE = "tblB59H8ThSo9yXwL";
const F = {
  name: "fldd277ViRcRDgP9j",
  approval: "fldgJwNrE9IXBMSwu",
  status: "fld7YebUzAA2eOQOX",
  url: "fldpl4qum04qHxNvQ",
  observation: "fldEoToir57OldwCn",
  opportunity: "flddoB9dLqYT6zUoS"
};
const ALLOWED_APPROVAL = "Approved for Draft";
const ALLOWED_STATUS = "Ready for Design";
export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "GET") return res.status(405).json({ error: "method_not_allowed" });
  const key = process.env.JAS_QUEUE_API_KEY;
  const pat = process.env.AIRTABLE_PAT;
  if (!key || !pat) return res.status(503).json({ error: "integration_not_configured" });
  if (req.headers.authorization !== `Bearer ${key}`) return res.status(401).json({ error: "unauthorized" });
  try {
    const records = [];
    let offset;
    do {
      const url = new URL(`https://api.airtable.com/v0/${BASE}/${TABLE}`);
      url.searchParams.set("pageSize", "100");
      for (const id of Object.values(F)) url.searchParams.append("fields[]", id);
      if (offset) url.searchParams.set("offset", offset);
      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${pat}` },
        signal: AbortSignal.timeout(12000)
      });
      if (!response.ok) return res.status(502).json({ error: "airtable_read_failed", status: response.status });
      const data = await response.json();
      records.push(...(data.records || []));
      offset = data.offset;
      if (records.length >= 1000) break;
    } while (offset);
    const queue = records.filter(({ fields = {} }) =>
      fields[F.approval] === ALLOWED_APPROVAL &&
      fields[F.status] === ALLOWED_STATUS &&
      !fields[F.url]
    ).map(({ id, fields }) => ({
      recordId: id,
      businessName: fields[F.name] || "",
      researchEvidence: fields[F.observation] || "",
      opportunity: fields[F.opportunity] || ""
    }));
    return res.status(200).json({ mode: "read_only", total: queue.length, queue });
  } catch {
    return res.status(502).json({ error: "queue_read_failed" });
  }
}
