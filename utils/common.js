require('dotenv').config();

const common = {
    pagination: (page, limit) => {
        let query = "";
        if (page != undefined && page != "") {

            if (page == 0) page = 1

            query += " LIMIT " + `${(parseInt(page) - 1) * parseInt(limit)},${limit}` + " ";
        } else {
            query += " LIMIT 10";
        }

        return query;
    },
}

module.exports = common;