
const signInController = (req, res) => {
    const { data } = res.locals;
    res.send(data)

}
export default signInController;