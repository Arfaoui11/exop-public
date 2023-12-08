This is the landing page of exop [LP](http://192.168.34.135:7001/lp/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Deployment Steps

## Static export next app


```bash
# Step 1
yarn build

# Step 2
yarn npx next export

```
This will generate a folder called "Out", thats the main folder we will package with maven to generate the war file

## Packaging with maven

```bash
# Step 1
yarn build:weblogic

```
This will generate a folder inside java-weblogic called target, inside target there will be the war file to deploy

## Help
For more information contact [Abderrahmen Mhemed](abderrahmen.mhemed@wevioo.com)