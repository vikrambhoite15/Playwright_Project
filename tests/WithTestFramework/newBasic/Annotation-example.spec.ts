
import {test,expect} from "@playwright/test";

test('Test case 1',{tag:'@smoke'}, async({page})=>{

    console.log("Test Case-1");   
});

test('@regression Test case 2', async({page})=>{

    console.log("Test Case-2");   
});

test('Test case 3',{tag:'@smoke'}, async({page})=>{

    console.log("Test Case-3");   
});

test('Test case 4',{tag:['@smoke','@regression']}, async({page})=>{

    console.log("Test Case-4");   
});

test('Test case 5',{tag:'@sanity'}, async({page})=>{

    console.log("Test Case-5");   
});
test('Test case 6',{tag:'@sanity'}, async({page})=>{

    console.log("Test Case-6");   
});