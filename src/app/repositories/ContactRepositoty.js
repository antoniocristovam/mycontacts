const { v4 } = require("uuid");

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
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({ name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };
      contacts.push(newContact);
      resolve(newContact);
    });
  }
}

module.exports = new ContactRepository();
