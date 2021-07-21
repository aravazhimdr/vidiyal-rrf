CREATE TABLE nuclei(
  id SERIAL PRIMARY KEY,
  templateID VARCHAR(150) NOT NULL,
  severity VARCHAR(15) NOT NULL,
  host VARCHAR(255) NOT NULL,
  matched VARCHAR(5000) NOT NULL,
  timestamp VARCHAR(50) NOT NULL,
  falsepositive BOOLEAN NOT NULL DEFAULT FALSE,
  oos BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO nuclei (templateID, severity, host, matched, timestamp) VALUES ('tech-detect', 'info', 'https://paypal.com/', 'https://paypal.com/' , '2021-05-06T17:22:03.448838208+05:30');

