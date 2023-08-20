const ContactRepositoty = require("../repositories/ContactRepositoty");
const ContactsRepository = require("../repositories/ContactRepositoty");

class ContactController {
  async index(request, response) {
    // Listar todos os projetos

    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    // Obter um Registro
    // response.json(request.params);
    const { id } = request.params;
    const contact = await ContactRepositoty.findById(id);

    if (!contact) {
      return response.status(404).json({ error: "User not found" });
    } else {
      response.json(contact);
    }
  }

  store() {
    // Criar um novo registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

module.exports = new ContactController();
