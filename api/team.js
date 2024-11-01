export function getAllTeams() {
    const _headers = new Headers();
    _headers.append('Accept', 'application/json');
    _headers.append('Access-Control-Allow-Origin', '*');
    // "Access-Control-Allow-Origin": "*",
    
    const _init = {
      method: 'GET',
      headers: _headers,
    //   mode: 'cors',
    //   cache: 'default',
    };
    
    const _request = new Request(`${global.baseurl}/teams`);
    
    return fetch(_request, _init).then(res => res.json())
}