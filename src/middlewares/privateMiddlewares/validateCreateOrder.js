import dayjs from "dayjs";
const validateCreateOrder = (req, res, next) => {
    const { user, books } = req.body;
    if (!user || books.length === 0) {
        return res.status(422).send("Dados incorretos");
    }

    const purchasedAt = dayjs().format("DD-MM-YYYY HH:mm:ss");
    res.locals.dataOrder = { user, books, purchasedAt };
    next();
}

export default validateCreateOrder;