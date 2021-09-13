
const getObj = async (Model, conditions) => {
    try {
        return await Model.findOne(conditions);
    } catch (error) {
        throw error;
    }
}
// const findOneWithPopAndSelct = async (condition, Model, popArr, selectStr) => {
//     console.log("in repository")
//     try {
//         let query = Model.findOne(condition)
//         if (popArr) query = populateDoc(query, popArr);
//         if (selectStr) query = selectDoc(query, selectStr);
//         return await query;
//     }
//     catch (err) {
//         return err
//     }
// }
// const selectDoc = (query, selectStr) => {
//     return query.select(selectStr);
// };
// const populateDoc = (query, popArr) => {
//     popArr.forEach((pop) => {
//         query = query.populate(pop);
//     });
//     return query;
// };

//in service:
// let chat = await repository.findOneWithPopAndSelct({ chatbotName: chatbotName }, Chat, [{ path: "squares", populate: { path: "elements" } }], null)


module.exports= { getObj }