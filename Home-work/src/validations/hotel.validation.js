const joi =require("joi");

/** creatr bus */
const createHotel={
    body: joi.object().keys({
        name: joi.string().required().trim(),
        address : joi.string().required().trim(),
        rating: joi.number().required(),
        table: joi.number().required(),
        room:joi.number().required(),
        location: joi.string().required().trim()
    })
}
module.exports={createHotel};