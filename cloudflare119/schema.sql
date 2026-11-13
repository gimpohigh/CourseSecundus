CREATE TABLE IF NOT EXISTS student_data (
  uid TEXT NOT NULL,
  bucket TEXT NOT NULL,
  body TEXT NOT NULL,
  revision INTEGER NOT NULL DEFAULT 1,
  updated_at INTEGER NOT NULL,
  PRIMARY KEY (uid, bucket)
);
CREATE TABLE IF NOT EXISTS deleted_students (
  uid TEXT PRIMARY KEY,
  deleted_at INTEGER NOT NULL
);
