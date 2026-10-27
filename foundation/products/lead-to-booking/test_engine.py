import unittest,sqlite3
from engine import *
class Tests(unittest.TestCase):
 def setUp(self):self.d=connect();seed(self.d)
 def test_demo(self):self.assertEqual(demo()['overdue'],1)
 def test_dedupe(self):
  a=ingest(self.d,'pilates','a','web','x','2026-10-26T14:00:00Z')
  b=ingest(self.d,'pilates','a','web','x','2026-10-26T14:00:00Z')
  self.assertEqual(a[0],b[0]);self.assertFalse(b[1])
 def test_tenant_contact(self):
  with self.assertRaises(sqlite3.IntegrityError):ingest(self.d,'hvac','a','web','x','2026-10-26T14:00:00Z')
 def test_invalid_transition(self):
  a=ingest(self.d,'pilates','a','web','x','2026-10-26T14:00:00Z')
  with self.assertRaises(ValueError):advance(self.d,a[0],'booked','2026-10-26T14:30:00Z')
 def test_followup(self):
  a=ingest(self.d,'pilates','a','web','x','2026-10-26T14:00:00Z')
  self.assertEqual(len(overdue(self.d,'2026-10-26T17:00:00Z')),1)
  advance(self.d,a[0],'contacted','2026-10-26T14:30:00Z')
  self.assertEqual(len(overdue(self.d,'2026-10-26T17:00:00Z')),0)
 def test_booking(self):
  a=ingest(self.d,'pilates','a','web','x','2026-10-26T14:00:00Z')
  advance(self.d,a[0],'contacted','2026-10-26T14:30:00Z')
  book(self.d,a[0],'2026-10-28T14:00:00Z')
  self.assertEqual(metrics(self.d,'pilates')['booked'],1)
 def test_timezone(self):
  with self.assertRaises(ValueError):ingest(self.d,'pilates','a','web','x','2026-10-26T14:00:00')
if __name__=='__main__':unittest.main()
