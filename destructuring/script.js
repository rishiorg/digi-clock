function showArrayDestructuring() {
    const array = [1, 2, 3, 4, 5];
    const [first, second, ...rest] = array;
    document.getElementById('result').innerHTML = `
        <p><strong>Array:</strong> [${array.join(', ')}]</p>
        <p><strong>Destructured:</strong> First: ${first}, Second: ${second}, Rest: [${rest.join(', ')}]</p>
    `;
}

function showObjectDestructuring() {
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    const { a, b, ...rest } = obj;
    document.getElementById('result').innerHTML = `
        <p><strong>Object:</strong> ${JSON.stringify(obj)}</p>
        <p><strong>Destructured:</strong> a: ${a}, b: ${b}, Rest: ${JSON.stringify(rest)}</p>
    `;
}

function showNestedDestructuring() {
    const nestedObj = { a: 1, b: { c: 2, d: 3 } };
    const { a, b: { c, d } } = nestedObj;
    document.getElementById('result').innerHTML = `
        <p><strong>Nested Object:</strong> ${JSON.stringify(nestedObj)}</p>
        <p><strong>Destructured:</strong> a: ${a}, c: ${c}, d: ${d}</p>
    `;
}
