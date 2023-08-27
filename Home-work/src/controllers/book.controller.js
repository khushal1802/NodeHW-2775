const { bookService } = require("../services");

/** create book */
const createBook = async (req, res) => {
  try {
    const reqBody = req.body;

    const book = await bookService.createBook(reqBody);
    if (!book) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "book create successfully!",
      data: { book },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get book list */
const getBookList = async (req, res) => {
  try {
    const getList = await bookService.getBookList(req, res);

    res.status(200).json({
      success: true,
      message: "Get book list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete book */
const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.bookId;
    // const bookExists = await bookService.getbookById(bookId);
    if (!bookId) {
      throw new Error("User not found!");
    }

    await bookService.deleteBook(bookId);

    res.status(200).json({
      success: true,
      message: "book delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createBook,
  getBookList,
  deleteBook,
};
