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

export const serializeComponent = (defaultComponent, bindProps, dynamicComponent) => {
    let component = defaultComponent;

    if (dynamicComponent) {
        const bind = {};
        Object.keys(dynamicComponent.props ?? {}).forEach((key) => {
            if (bindProps[key]) {
                bind[key] = bindProps[key];
            }
        });

        component = {
            component: dynamicComponent,
            bind
        };
    }

    return component;
};
