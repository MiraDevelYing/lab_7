let arr = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];
let epsilon = ["---", 0, 0, 0, 0, 0, 0, 0, 0, ];
let s = [];
let i = 0;
let k = 0;
for (let x = 3; x <= 11; x++) {
    let y = Number((1 /Math.sqrt(2 * (x * x * x * x) + 3 * (x * x * x) + 3)).toFixed(6));
    arr[0].push(y);
    i++;
}
console.log(`y: ` + arr[0])
for (k; k <= 7; k++) {
    for (let j = 0; j < arr[k].length - 1; j++) {
        let delta = Number((arr[k][j + 1] - arr[k][j]).toFixed(6));
        arr[k + 1].push(delta);
        epsilon[k + 1] = Number(parseFloat((epsilon[k + 1] + delta)).toFixed(6));
    }
    s[k] = Number(parseFloat(arr[k][arr[k].length - 1] - arr[k][0]).toFixed(6));
    console.log(`Δ${k+1}y: ` + arr[k + 1])
}

console.log('E: ' + epsilon)
console.log('S: ' + s)
let f1 = ((1 / 1) * (arr[1][1] + (1 / 2) * arr[2][1] + (1 / 3) * arr[3][1] + (1 / 4) * arr[4][1] + (1 / 2) * arr[5][1] + (1 / 6) * arr[6][1] + (1 / 7) * arr[7][1])).toFixed(6);
console.log(`f': ` + f1)
let f2 = ((1 / (1 ** 1)) * (arr[2][arr[2].length - 2] + arr[3][arr[3].length - 2] + (11 / 12) * arr[4][arr[4].length - 2] + (5 / 6) * arr[5][arr[5].length - 2] + (137 / 180) * arr[6][arr[6].length - 2] + (7 / 10) * arr[7][arr[7].length - 2])).toFixed(9);
console.log(`f'': ` + f2)