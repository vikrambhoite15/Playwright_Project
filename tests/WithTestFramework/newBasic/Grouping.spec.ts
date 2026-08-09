
import {test,expect} from "@playwright/test";

test.describe('Group 1', async ()=>{

    test('Test Case 1', async ({page})=>{
        console.log("Test case-1");
        
    });
    test('Test Case 2', async ({page})=>{
        console.log("Test case-2");
        
    });
    test('Test Case 3', async ({page})=>{
        console.log("Test case-3");
        
    });
})

test.describe('Group 2', async ()=>{

    test('Test Case 4', async ({page})=>{
        console.log("Test case-4");
        
    });
    test('Test Case 5', async ({page})=>{
        console.log("Test case-5");
        
    });
    test('Test Case 6', async ({page})=>{
        console.log("Test case-6");
        
    });
})