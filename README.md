# ReqRes.in API Automation Tests

This project contains end-to-end automated tests for the [ReqRes](https://reqres.in/) RESTful web service using `CodeceptJS` and `.feature` files written in Gherkin language.


## Getting Started

### 1. Install [Git](https://git-scm.com/downloads)

### 2. Clone the repository

```
git clone https://github.com/daneapol/ReqRes.git
cd ReqRes
```

### 3. Install dependencies

```
npm install
```

### 4. Run the tests

```
npx codeceptjs run
```

### To run specific features

```
npx codeceptjs run --grep "Get a list of available users and print users with odd ID numbers"
npx codeceptjs run --grep "Create a new user and validate that the creation date is today"
npx codeceptjs run --grep "Update a user and validate that the request and response body match"
npx codeceptjs run --grep "Get a list of available users with delay and response time is no longer than 1 second"
npx codeceptjs run --grep "Login user but without a password and validate that user cannot login"
```

OR

```
npx codeceptjs run --features features/scenario_1.feature
npx codeceptjs run --features features/scenario_2.feature
npx codeceptjs run --features features/scenario_3.feature
npx codeceptjs run --features features/scenario_4.feature
npx codeceptjs run --features features/scenario_5.feature
```