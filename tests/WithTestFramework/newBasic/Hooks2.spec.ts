
import {test,expect} from "@playwright/test";


test.beforeEach('Before Each', async ()=>{
     console.log("Before Each..");
     
});

test.beforeAll('Before All', async ()=>{
    console.log("Before All..");
    
})

test.afterAll('After All', async ()=>{
    console.log("After All..");
    
})

test.afterEach('After Each', async ()=>{
    console.log("After Each..");
    
})

test("Test case 1", async ({page})=>{
    console.log("Test case 1");
    
    });

    test('Test case 2',async ()=>{
        console.log("Test case 2");
        
    })