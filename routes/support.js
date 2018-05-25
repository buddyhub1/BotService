var support = {};

support.log = (str) => {
    console.log("\n" + str);
}

support.success = (response, data) => {
    return response.status(200).send(data);
}
support.error = (response, error) => {
    return response.status(400).send({ "message": "Error", "data": error });
}
support.invalidData = (response) => {
    return response.status(400).send({ "message": "Invalid data" });
}
support.badRequest = (response) => {
    return response.status(400).send({ "message": "Bad Request" });
}
support.noDataFound = (response) => {
    return response.status(200).send({ "message": "No Data Found", "data": [] });
}
module.exports = support;