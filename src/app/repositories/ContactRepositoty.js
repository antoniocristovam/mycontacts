const { v4 } = require("uuid");

const db = require("../../database/index");

let contacts = [
  {
    id: v4(),
    name: "Antonio Cristovam",
    email: "antoniocristovam@outlook.com.br",
    phone: "992214177",
    category_id: v4(),
  },
  {
    id: v4(),
    name: "Valderi Cristovam",
    email: "deircristovam@outlook.com.br",
    phone: "973027579",
    category_id: v4(),
  },
  {
    id: v4(),
    name: "Armando Cristovam",
    email: "deircristovam@outlook.com.br",
    phone: "973027579",
    category_id: v4(),
  },
  {
    id: v4(),
    name: "Julia arnaldo",
    email: "deircristovam@outlook.com.br",
    phone: "973027579",
    category_id: v4(),
  },
  {
    id: v4(),
    name: "Paulo vieira",
    email: "deircristovam@outlook.com.br",
    phone: "973027579",
    category_id: v4(),
  },
];

class ContactRepository {
  async findAll(orderBy = "ASC") {
    const direction = orderBy.toUpperCase() === "DESC" ? "DESC" : "ASC";

    const rows = await db.query(
      `SELECT * FROM contacts  ORDER BY name ${direction}`
    );
    return rows;
  }

  async findById(id) {
    const [row] = await db.query("SELECT * FROM contacts WHERE id = $1", [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query("SELECT * FROM contacts WHERE email = $1", [
      email,
    ]);
    return row;
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  async create({ name, email, phone, category_id }) {
    const [row] = await db.query(
      `INSERT INTO contacts(name, email, phone, category_id)
    VALUES($1, $2, $3, $4) RETURNING *`,
      [name, email, phone, category_id]
    );

    return row;
  }

  updater(id, { name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const updateContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) =>
        contact.id === id ? updateContact : contact
      );

      resolve(updateContact);
    });
  }
}

module.exports = new ContactRepository();
