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

CREATE TABLE IF NOT EXISTS statistics_members(uid TEXT NOT NULL,site TEXT NOT NULL,body TEXT NOT NULL,PRIMARY KEY(uid,site));
CREATE TABLE IF NOT EXISTS statistics_counts(site TEXT NOT NULL,course_id TEXT NOT NULL,total INTEGER NOT NULL DEFAULT 0,PRIMARY KEY(site,course_id));
CREATE TABLE IF NOT EXISTS primary_statistics_revisions(uid TEXT PRIMARY KEY, revision INTEGER NOT NULL);
