# React Admin Demo

React Admin is a quick UI framework for REST APIs. The UI components are extremely opinionated (ex: page header, buttons, alerts are embedded deeplo within components).

## Scripts

- `dev` to run both json-server and React code
- `client` to run React code
- `server` to run json-server

## Dependencies

- json-server
- concurrently (to run FE and BE with one script)

## Client Dependencies

- react-admin
- ra-data-simple-rest
- @material-ui/core

## CRA

### Proxy

In package.json, add `proxy` key

```json
"proxy": "http://localhost:5000",
```

### Script

In CRA client package.json, add script to point to folder with `--prefix`

```json
"client": "npm start --prefix client",
```
