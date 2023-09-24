const CategoriesRepository = require("../repositories/CategoryRepository");

class CategoryController {
  async index(request, response) {
    const category = await CategoriesRepository.findAll();
    response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: "Name is required." });
    }

    const category = await CategoriesRepository.create({ name });

    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    const category = await CategoriesRepository.delete(id);

    // if (!category) {
    //   return response.status(404).json({ Error: "Contato não encontrado." });
    // }

    await CategoriesRepository.delete(id);

    // response.json({ Success: "Contato deletado com sucesso." });
    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
