# pokemon-api
ExpressAPI to allow our client to store and retrieve pokemon and items.

## Running the swagger page
Once you have the API started locally, make sure to run ```npm start```, then paste this link in your URL to test out the API through Swagger: http://localhost:8080/api-docs/#/

## Setting up Mongo locally
Getting MongoDB running locally is crucial to have the API run correctly. Please refer to these docs on installing MongoDB to your respective OS: https://docs.mongodb.com/manual/administration/install-community/

### Running MongoDB (not installed as service)
If you opted to install MongoDB without the service, you will need to start the database server manually when working.

1. ) Open a command prompt and create a data directory

        mkdir c:\data

2. ) Navigate to the directory

        cd data

3. ) Run the below command to start the database server

        mongod -dbpath .

In the future, you will only need to repeat steps 2 & 3 to run it.

### Adding MongoDB to the path
If you run into issues using the mongod command outside of the MongoDB bin directory:

1. ) Get the path to your MongoDB server bin folder. Should look like what's below

        C:\Program Files\MongoDB\Server\{version here}\bin

2. ) Add a system environment variable with your path. Be sure to restart any command prompts before running the mongod command

## DB tooling to view documents in MongoDB
My personal tool I would suggest using would be Robo3T, here is the link to install it: https://robomongo.org/

#### NOTE: Database name and Collection names
Make sure to name the database 'PokemonStorageCenter' and have two collections named 'Pokemon' and 'Item'.
