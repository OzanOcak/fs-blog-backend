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
