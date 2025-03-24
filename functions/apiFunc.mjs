import fetch from 'node-fetch';

export async function fetchData(url, options, isJson = true) {

    const response = await fetch(url, options);
    //console.log(response);
    return isJson ? response.json() : response.text();
}

export async function handleResponse(data) {

    if (data.error) {
        return { error: data.error };
    }

    return { 
        message: data.message, 
        challenge: data.challenge 
    };
}