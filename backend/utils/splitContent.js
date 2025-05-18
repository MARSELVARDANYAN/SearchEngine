
export function splitContent(connect) {
    if(typeof connect === 'string') {
        return connect.trim().split(' ');
    }
    return [];
}

