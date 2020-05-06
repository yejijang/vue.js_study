//(1) 비어있는 a1 배열을 생성한다.
let a1 = [];

//(2) for 문에서 배열을 생성하여 a1 배열의 원소에 대입하시오. for 문의 실행 결과 배열의 값은 다음과 같아야 한다. [[0, 1], [2, 3], [4, 5]]
for (let i = 0; i < 3; ++i) {
    a1[i] = [];
    for (let j = 0; j < 2; ++j) {
        a1[i][j] = i + j + i;
    }
}

//(3) a1 배열을 깊은 복사하여 a2 배열을 생성한다. 즉 a1 배열만 복제되는 것이 아니고, 배열의 원소들도 복제되어야 한다. a1 배열의 원소는 3 배열이다. ([0,1], [2,3], [4,5])
let a2 = [];

for (let i = 0; i < a1.length; ++i) {
    a2[i] = [];
    for (let j = 0; j < 2; ++j) {
         Object.assign(a2[i][j],a1[i][j]);
    }
}
// 다시 풀어보기

//(4) a1[0][0] = 100; 을 실행한다.
a1[0][0] = 100;

//(5) a1 배열을 출력한다.
console.log(a1);

//(6) a2 배열을 출력한다.
console.log(a2);