# Testing Hasura GraphQL APIs with Karate

A sample for how to run automated Karate tests (https://github.com/intuit/karate) against a GraphQL API (Hasura).

This is the associated repo for the blog post which can be found here:

https://hasura.io/blog/testing-hasura-graphql-apis-with-karate/

### First load up your sample Hasura API:

```
docker-compose up
```


It should migrate automatically, but if it doesn't
```
hasura-cli migrate apply
hasura-cli metadata apply
```


if all test suceeded, you can get test result. 
```
open karate/results/karate-reports/karate-summary.html
```
