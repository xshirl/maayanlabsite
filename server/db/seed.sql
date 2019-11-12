-- psql -d resources -f server/db/seed.sql

\c resources 

INSERT INTO resources(title, logo, website, doc, pub, keywords, citations, pmid, altmetric, github, youtube, parameter, category) VALUES
('Geneshot', 'http://labs.icahn.mssm.edu/maayanlab/wp-content/uploads/sites/75/2019/05/geneshot_logo-3.jpg', 'https://amp.pharm.mssm.edu/geneshot/index.html
', 'https://amp.pharm.mssm.edu/geneshot/help.html', 'https://academic.oup.com/nar/article/47/W1/W571/5494749
', 'search engine, RNA-seq, genomics, gene set, similarity matrix, text mining, matrix, visualization
', 26, 31114885, 20, 'https://github.com/MaayanLab/geneshot', 'https://www.youtube.com/watch?v=mp1OYsFHBd0', 'geneshot', 'RNA-seq'),
('BioJupies', 'http://labs.icahn.mssm.edu/maayanlab/wp-content/uploads/sites/75/2018/08/biojupies-300x99.jpg', 'https://amp.pharm.mssm.edu/biojupies/', 'https://amp.pharm.mssm.edu/biojupies/help', 'https://www.ncbi.nlm.nih.gov/pubmed/30447998', 'RNA-seq, Jupyter notebooks, enrichment analysis, heat maps, differential expression, visualization, cloud storage, LINCS', 58, 30447998, 113, 'https://github.com/MaayanLab/biojupies', 'https://www.youtube.com/watch?v=KMIrW3wb690', 'biojupies', 'RNA-seq'),
('Archs4', 'http://labs.icahn.mssm.edu/maayanlab/wp-content/uploads/sites/75/2017/04/archs4_icon-150x150.png','https://amp.pharm.mssm.edu/archs4/', 'https://amp.pharm.mssm.edu/archs4/help.html', 'https://www.ncbi.nlm.nih.gov/pubmed/29636450', 'RNA-seq, protein-protein interactions, visualization, gene expression, LINCS', 49, 29636450, 174, 'https://github.com/MaayanLab/archs4', 'https://www.youtube.com/watch?v=xw8vh_sYJ4s', 'archs4', 'RNA-seq'),
('Genes2FANS', 'http://labs.icahn.mssm.edu/maayanlab/wp-content/uploads/sites/75/2014/10/G2F-icon.png', '', '', 'https://www.ncbi.nlm.nih.gov/pubmed/22748121', 'networks, proteomics, database, protein-protein interaction, gene set libraries', 52, 22748121, 4, '', '', 'genes2fans', 'proteomics'),
('Sets2Networks', 'http://labs.icahn.mssm.edu/maayanlab/wp-content/uploads/sites/75/2014/10/S2N-icon.png', 'https://www.maayanlab.net/S2N/', '', 'https://www.ncbi.nlm.nih.gov/pubmed/22824380', 'networks, protein-protein interaction, proteomics', 33, 22824380, 1, '', 'https://www.youtube.com/watch?v=h7Iy-hpZJ7o', 'sets2networks', 'proteomics'),
('ESCAPE', 'http://labs.icahn.mssm.edu/maayanlab/wp-content/uploads/sites/75/2014/10/ESCAPE-icon.png', '', '', 'https://www.ncbi.nlm.nih.gov/pubmed/23794736', 'database, proteomics, visualization, networks', 26, 23794736, 9, '','', 'escape', 'proteomics')
;

