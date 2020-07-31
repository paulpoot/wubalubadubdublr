import resolveResponse from './resolve-response';

const cdnUrl = 'https://cdn.contentful.com';

const getBaseParameters = () => {
    const baseParameters = new URLSearchParams();
    baseParameters.append('include', '10');
    baseParameters.append('access_token', process.env.CONTENTFUL_API_KEY);
    return baseParameters;
};

const getEntryCollection = async (contentType, query = {}) => {
    const baseParameters = getBaseParameters();
    baseParameters.set('content_type', contentType);
    Object.keys(query).forEach((key) => {
        baseParameters.set(key, query[key]);
    });

    const url = `${cdnUrl}/spaces/${process.env.CONTENTFUL_SPACE}/environments/master/entries?${baseParameters}`;

    const response = await fetch(url);
    const data = await response.json();
    data.items = resolveResponse(data, { itemEntryPoints: ['fields'] });
    return data;
};

const getEntry = async (id, contentType) => {
    const baseParameters = getBaseParameters();
    if (contentType) {
        baseParameters.set('content_type', contentType);
    }

    const url = `${cdnUrl}/spaces/${process.env.CONTENTFUL_SPACE}/environments/master/entries/${id}?${baseParameters}`;

    const response = await fetch(url);
    const data = await response.json();
    data.items = resolveResponse(data, { itemEntryPoints: ['fields'] });
    return data;
};

module.exports.getEntryCollection = getEntryCollection;
module.exports.getEntry = getEntry;
