const validateName = (name)=> {
 return name.match(/^([^0-9]*)$/);
}

const validateId = (id) => {
    return id.match(/^[0-9a-fA-F]{24}$/);
}

module.exports = {validateName,validateId};