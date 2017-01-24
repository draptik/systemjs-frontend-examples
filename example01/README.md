# Example 01

In this example we will create simple modules from scratch (f.ex. CommonJS and AMD) and use them directly in the start page (`index.html`).

## Setup and usage

```bash
npm install
```

- All javascript modules are located in folder `js/modules`.
- For simplicity, we'll use the npm package `http-server` to run the site:
Install `http-server`:
```bash
npm install -g http-server
```

Run `http-server` from the command line and visit [http://localhost:8080/index.html](http://localhost:8080/index.html).

## Notes

- What is the difference between `System.import` and `SystemJS.import`? Are they aliases? Answer: Yes they are aliases ([link](https://github.com/systemjs/systemjs/issues/1547#issuecomment-274718695))

