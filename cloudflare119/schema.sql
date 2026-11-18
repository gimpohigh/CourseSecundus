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

CREATE TABLE IF NOT EXISTS primary_students120 (
 uid TEXT PRIMARY KEY, profile TEXT, slots TEXT, primary_revision INTEGER NOT NULL DEFAULT 0,
 secondary_edited INTEGER NOT NULL DEFAULT 0, account TEXT, synced_at INTEGER NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS media_files120 (
 id TEXT PRIMARY KEY, room TEXT NOT NULL, actor TEXT NOT NULL, message_id TEXT NOT NULL,
 name TEXT NOT NULL, mime TEXT NOT NULL, size INTEGER NOT NULL, state TEXT NOT NULL,
 created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS media_room120 ON media_files120(room,message_id);
CREATE INDEX IF NOT EXISTS media_owner120 ON media_files120(actor,state,created_at);
CREATE TABLE IF NOT EXISTS media_ready120 (
 viewer TEXT NOT NULL, room TEXT NOT NULL, media_id TEXT NOT NULL, PRIMARY KEY(viewer,room,media_id)
);
