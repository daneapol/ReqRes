import { CRUDUser, ListUser } from "../interfaces";
import { consoleLogAndTable, isDateToday } from "../utils";

const { I } = inject();

let response;

Given('I send a request to get the list of available users', async () => {
    console.info('Sending request to get list of available users');
    response = await I.sendGetRequest('/api/users?page=2');
});

Then('I should see that the request was successful', () => {
    console.info(`Response code = ${response.status}`);
    I.seeResponseCodeIsSuccessful();
});

Then('I print available users with odd ID numbers', () => {
    const usersWithOddIDNumber = response.data.data.filter((user: ListUser) => user.id % 2 === 1);
    consoleLogAndTable('Available users with odd ID numbers:', usersWithOddIDNumber);
    const hasEvenIDNumber = usersWithOddIDNumber.some((user: ListUser) => user.id % 2 === 0);
    I.assertFalse(hasEvenIDNumber);
});

Given('I send a request to create a new user with name {string} and job {string}', async (name: string, job: string) => {
    console.info(`Sending request to create user with name '${name}' and job '${job}'`);
    const userToCreate: CRUDUser = { name, job };
    response = await I.sendPostRequest('/api/users', userToCreate);
});

Then('I should see that the creation date is today', () => {
    consoleLogAndTable('User created:', response.data);
    const { createdAt } = response.data as CRUDUser;
    I.assertTrue(isDateToday(createdAt));
});

let userToUpdate: CRUDUser;

Given('I send a request to update user with name {string} and job {string}', async (name: string, job: string) => {
    console.info(`Sending request to update user with name '${name}' with job '${job}'`);
    userToUpdate = { name, job };
    response = await I.sendPutRequest('/api/users/2', userToUpdate);
});

Then('I should see that the request body matches the response body where possible', () => {
    consoleLogAndTable('User updated:', response.data);
    I.assertContain(response.data, userToUpdate);
});

Given('I send a request to login user {string} but no password', async (email: string) => {
    console.info(`Sending request to login user '${email}' but no password`);
    response = await I.sendPostRequest('/api/login', { email });
});

Then('I should see that the user cannot login', () => {
    console.error(response.data.error);
    I.seeResponseCodeIsClientError();
});