# Ams Docs

This uses mdx (markdown extended). It let's you do stuff like

```
# Some markdown title

some markdown text

<Button>boom, jsx in markdown</Button>
```

It also automatically transforms your snippets into code, all you need to do is type:

```
 ```jsx live
function MyComponent(){
  return <p>hello world</p>
}

render(<MyComponent>)
 ```
```

the \*live** flag will automatically transform your snipper into a live component. If you just want to render something (whithout declaring variables or so) you can also add the **inline\*\* flag like this:

```
 ```jsx live inline
<MyComponent>
 ```
```

# Contribute

1. Create a `.mdx` file in the pages directory, it will automatically create a route under /your-filename
2. Write your content, you can check the `select.mdx` file to see an example
3. add a new link to your page to the `components/layout.js` file
