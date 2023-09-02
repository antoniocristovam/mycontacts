const ContactsRepository = require("../repositories/ContactRepositoty");

// Centralizar toda regras de negocios.

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: "User not found." });
    }
    response.json(contact);
  }

  async store(request, response) {
    const { name, email, phone, category_id } = request.body;

    if (!name) {
      return response.status(400).json({ error: "Name is required." });
    }

    const contactExists = await ContactsRepository.findByEmail(email);

    if (contactExists) {
      return response
        .status(400)
        .json({ error: "This e-mail is already been taken." });
    }
    const contacts = await ContactsRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    response.json(contacts);
  }

  update() {
    // Editar um registro
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: "User not found." });
    }
    await ContactsRepository.delete(id);

    //204: Not Content
    response.json({ Success: "Contato deletado com sucesso." });
  }
}

module.exports = new ContactController();
