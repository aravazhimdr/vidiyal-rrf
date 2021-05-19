const { configDB } = require("./db/config");
const Pool = require('pg').Pool;
const pool = new Pool(configDB);

//Controller
const getIssue = (request, response) => {
  pool.query('SELECT * FROM nuclei ORDER BY id ASC', (err, res) => {
    if (err) {
       response.status(500).send(err);
       console.log('getIssue: ' + err)
       }
    else {
      if (res.rows.length > 0) {
        res = res.rows;
        }
      }
    console.log('Getting Issues')
    response.status(200).send(res)
  })
}

const createIssue = (request, response) => {
    if (!request.body) {
      response.status(500).send('{"Success": false, "msg": "No body found"}');
    }
      const issue = {
        templateid: request.body.templateID,
        severity: request.body.info.severity,
        host: request.body.host,
        matched: request.body.matched,
        timestamp: request.body.timestamp
      };

    pool.query("INSERT INTO nuclei (templateid, severity, host, matched, timestamp) VALUES ($1, $2, $3, $4, $5);", [issue.templateid, issue.severity, issue.host, issue.matched, issue.timestamp], (err, res) => {
      if (err) {
        response.status(500).send(err)
        console.log('createIssue: ' + err)
      }
      response.status(201).send('{"Success": true, "msg": "Insert Success"}')
    })
}


//Routes
module.exports = {
  getIssue,
  createIssue
  //filterIssue,
}
