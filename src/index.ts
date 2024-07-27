#!/usr/bin/env node
import { confirm, intro, outro, text } from '@clack/prompts';

const sum = (...nums: number[]) => {
    return nums.reduce((acc, num) => acc + num, 0);
};

const main = async () => {
    intro(`Simple Sum Application`);
    let nums = [];
    let shouldContinue = false;
    do {
        const num = await text({
            message: 'Enter a number',
            placeholder: '43',
            validate(value) {
                if (value.length === 0) return `Value is required!`;
                if (isNaN(Number(value))) return `Value must be a number!`;
            },
        });
        nums.push(parseInt(num.toString()));
        shouldContinue = await confirm({
            message: 'Do you want to continue?',
        }) as boolean;
    } while (shouldContinue);
    outro(`total sum is ${sum(...nums)}`);
    process.exit(1);
}

main().catch((err) => {
    if (err instanceof Error) {
      console.log(err);
    }
    process.exit(1);
});