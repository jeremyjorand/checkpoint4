const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  static table = "product";

  insert(item) {
    return this.connection.query(
      `insert into ${ProductManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${ProductManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }

  findAllProduct() {
    return this.connection.query(
      `select p.id, p.quantity, p.nameProduct,p.categoryId ,c.nameCategory from  ${ProductManager.table} as p inner join category as c on p.categoryId = c.id`
    );
  }
}

module.exports = ProductManager;
