import {test} from "@playwright/test";

test.describe.configure({mode:'parallel'});

test.describe('Group 1',async()=>{

test('Test1', async ({page})=>{
    console.log("Test Case 1");
});

test('Test2', async ({page})=>{
    console.log("Test Case 2");
});

test('Test3', async ({page})=>{
    console.log("Test Case 3");
});
});


test('Test4', async ({page})=>{
    console.log("Test Case 4");
});

test('Test5', async ({page})=>{
    console.log("Test Case 5");
});
test('Test 6', async ({page})=>{
    console.log("Test Case 6");
});