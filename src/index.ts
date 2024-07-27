#!/usr/bin/env node
const sum = (...nums: number[]) => {
    return nums.reduce((acc, num) => acc + num, 0);
};

const main = async () => {
    console.log(sum(1, 2, 3, 4, 5));
}

main().catch((err) => {
    if (err instanceof Error) {
      console.log(err);
    }
    process.exit(1);
});