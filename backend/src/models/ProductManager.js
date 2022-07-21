const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  static table = "product";

  insert(product) {
    return this.connection.query(
      `insert into ${ProductManager.table} (nameProduct, categoryId, quantity) values (?,?,?)`,
      [product.nameProduct, product.categoryId, product.quantity]
    );
  }

  update(product) {
    return this.connection.query(
      `update ${ProductManager.table} set quantity = ? where id = ?`,
      [product.quantity, product.id]
    );
  }

  findAllProduct() {
    return this.connection.query(
      `select p.id, p.quantity, p.nameProduct,p.categoryId ,c.nameCategory from  ${ProductManager.table} as p inner join category as c on p.categoryId = c.id order by p.categoryId, p.nameProduct asc`
    );
  }
}

module.exports = ProductManager;
