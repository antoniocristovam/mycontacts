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
}

module.exports = new CategoryController();
