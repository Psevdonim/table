const isObject = (obj) => {
    return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
};

export const serializeCells = (rows, fields) => {
    const serializedData = rows.map((row) => {
        let data = row;

        if (isObject(fields)) {
            const keys = Object.keys(fields);
            keys.forEach((key) => {
                let item = data[key] ?? {};
                let fieldKeys = fields[key] ?? [];

                data[key] = fieldKeys.map((el) => item[el] ?? '').join(' --- ');
            });
        }

        return data;
    });

    return serializedData || [];
};
