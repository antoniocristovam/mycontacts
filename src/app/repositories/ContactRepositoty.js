const { v4 } = require("uuid");

const contacts = [
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
}

module.exports = new ContactRepository();
