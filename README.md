# Ipedis web components 

## How to contribute

TODO 

### install dependencies

first you will need [jq](https://jqlang.github.io/jq/download/)

```bash
sudo apt-get install jq # linux
```

```bash
brew install jq # MacOS
```

```bash
npm i -g nx
npm i
```

you can now build lint and test all packages

```bash
npm run build
npm run lint
npm run test
npm run e2e
```

### create a new component

Execute the following command to create a new component, it will create component `foo` in the packages folder
```bash
bin/create-component.sh foo
```

You can now run for this particular component
```bash
## Build the component foo
nx build foo
## lint the component foo and fix the issues
nx lint foo --fix
## run .spec.ts test for the component foo
nx test foo
## run .e2e.ts test for the component foo
nx e2e foo
## run the component foo in the browser
nx serve foo
```