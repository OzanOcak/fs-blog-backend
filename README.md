## setting-up node server-1

```console
npm init
touch src/server.js
yarn add express
node src/server.js
```

## middleware

```console
curl -X POST -H "Content-Type: application/json" http://localhost:8000/hey -d '{"name":"ozan"}'
```

## upvote

```console
curl -X PUT http://localhost:8000/api/articles/learn-react/upvote
```

## comment

```console
curl -X POST -H "Content-Type: application/json" http://localhost:8000/api/articles/mongodb/comments -d '{"postedBy":"shakespeare","text":"be or not to be"}'
```

## mongodb as local storage

```console
brew --version
brew tap mongodb/brew
brew install mongodb-community@5.0
brew services start mongodb-community@5.0
// brew services stop mongodb-community@5.0
```

to give the path the database folder we will create

```console
mkdir database
mongod --dbpath ./database
mongosh

> show dbs
> use database
  // this comment will create db object
> db.articles.insertMany()
  // now we can copy past articles array into insertMany method to save in database
  // articles is a collection we name
> db.articles.find()
> db.articles.find({"name":"mongodb"})
  // CTRL+C to exit
```

```console
yarn add mongod
curl http://localhost:8000/api/articles/mongodb
```
