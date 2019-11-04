
\c resources

DROP TABLE IF EXISTS resources;

CREATE TABLE IF NOT EXISTS resources (
    id SERIAL PRIMARY KEY,
    title TEXT,
    logo TEXT,
    website TEXT,
    doc TEXT,
    pub TEXT,
    keywords TEXT,
    citations INTEGER, 
    pmid INTEGER, 
    altmetric INTEGER,
    github TEXT,
    youtube TEXT

);

