export function http(req, data, log = true) {
    let payload;
    try {
         payload = {
            statusCode: getStatusCode(req.method),
            success: true,
            data: data
        }
    } catch (error) {
        console.log(error)
    }
    return payload;
}

function getStatusCode(method) {
    switch(method) {
        case 'GET':
            return 200;
        case 'POST':
            return 201;
        case 'PUT':
            return 202;
        case 'DELETE':
            return 202;
        default:
            return 405;
    }
}