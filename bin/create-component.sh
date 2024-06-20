#!/usr/bin/env bash

PROJECT_NAME=$1

## check if jq is installed
if ! [ -x "$(command -v jq)" ]; then
  echo 'Error: jq is not installed.' >&2
  exit 1
fi

if [ -z "$PROJECT_NAME" ]; then
  echo "Please provide a project name as the first argument"
  exit 1
fi

if [ -d "packages/$PROJECT_NAME" ]; then
  echo "Project $PROJECT_NAME already exists"
  exit 1
fi

## generate boilerplate
nx g @nxext/stencil:lib $PROJECT_NAME --buildable --name=$PROJECT_NAME --style=scss --importPath=@ipedis/$PROJECT_NAME --component=true || exit 1

## remove unused files
rm -rf packages/$PROJECT_NAME/LICENSE

## copy linter config
cp bin/template/.eslintrc.json packages/$PROJECT_NAME
cp bin/template/stencil.config.ts packages/$PROJECT_NAME

## change on stencil config the TEMPLATE_NAMESPACE
sed -i -e "s|TEMPLATE_NAMESPACE|${PROJECT_NAME}|g" "packages/${PROJECT_NAME}/stencil.config.ts" && rm "packages/${PROJECT_NAME}/stencil.config.ts-e"

## we update the project.json to patch the linting
jq '.targets.lint = {
  "executor": "@nx/eslint:lint",
  "options": {
    "lintFilePatterns": ["packages/'${PROJECT_NAME}'/**/*.ts", "packages/'${PROJECT_NAME}'/*.ts"]
  }
}' "packages/${PROJECT_NAME}/project.json" > tmp.$$.json && mv tmp.$$.json "packages/${PROJECT_NAME}/project.json"