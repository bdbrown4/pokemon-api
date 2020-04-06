# pokemon-api
ExpressAPI to allow our client to store and retrieve pokemon and items.

## Running the swagger page
Once you have the API started locally, make sure to run ```npm start```, then paste this link in your URL to test out the API through Swagger: http://localhost:8080/api-docs/#/

## Setting up Mongo locally
Getting MongoDB running locally is crucial to have the API run correctly. Please refer to these docs on installing MongoDB to your respective OS: https://docs.mongodb.com/manual/administration/install-community/

## DB tooling to view documents in MongoDB
My personal tool I would suggest using would be Robo3T, here is the link to install it: https://robomongo.org/

#### NOTE: Database name and Collection names
Make sure to name the database 'PokemonStorageCenter' and have two collections named 'Pokemon' and 'Item'.
