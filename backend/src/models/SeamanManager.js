const AbstractManager = require("./AbstractManager");

class SeamanManager extends AbstractManager {
  static table = "seaman";

  insert(seaman) {
    return this.connection.query(
      `insert into ${SeamanManager.table} (lastname, firstname, avatar, postId) values (?,?,?,?)`,
      [seaman.lastname, seaman.firstname, seaman.avatar, seaman.postId]
    );
  }

  update(seaman) {
    return this.connection.query(
      `update ${SeamanManager.table} set title = ? where id = ?`,
      [seaman.title, seaman.id]
    );
  }

  findAllSeaman() {
    return this.connection.query(
      `select sm.id,sm.lastname, sm.firstname, sm.avatar, p.label from  ${SeamanManager.table} as sm inner join post as p on sm.postId = p.id order by sm.lastname asc`
    );
  }
}

module.exports = SeamanManager;
