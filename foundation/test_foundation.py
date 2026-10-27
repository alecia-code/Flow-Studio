import unittest
from lead_pipeline import load, pipeline, validate

class FoundationTests(unittest.TestCase):
    def test_relationships(self):
        self.assertEqual(validate(), (2,3,2))
    def test_demo_pipeline(self):
        records = pipeline()
        self.assertEqual(len(records),2)
        self.assertEqual(records[0]["next_action"],"escalate_overdue")
        self.assertEqual(records[1]["next_action"],"review_qualification")
        self.assertTrue(all(not x["send_message"] for x in records))
        self.assertEqual(len(set(x["dedupe_key"] for x in records)),2)
    def test_no_real_contact_details(self):
        self.assertTrue(all(not x.get("email") and not x.get("phone") for x in load("contacts")))

if __name__ == "__main__":
    unittest.main()
