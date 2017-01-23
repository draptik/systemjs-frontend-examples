# Example 01

In this example we will create simple modules from scratch (f.ex. CommonJS and AMD) and use them directly in the start page (`index.html`).

## Setup and usage

- All javascript modules are located in folder `js/modules`.
- For simplicity, we'll use the npm package `http-server` to run the site:
Install `http-server`:
```bash
npm install -g http-server
```

Run `http-server` from the command line and visit [http://localhost:8080/index.html](http://localhost:8080/index.html).

## Unsolved problems

- What is the difference between `System.import` and `SystemJS.import`? Are they aliases?
- What is wrong with our module imports for CommonJS and AMD?
