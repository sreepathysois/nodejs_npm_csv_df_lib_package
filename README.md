This Repository is to create npm package library called csv-to-dataframe, publish using Github Packages and also test the library using sample node.js application. 

######## Steps to Create NPM Package################

Step 1: Create a Publoic Git Repository

Step 2: Clone the repo using git clone to create local git or working directory on Ubuntu Machine

sudo git clone https://github.com/sreepathysois/nodejs_npm_csv_df_lib_package.git 
cd nodejs_npm_csv_df_lib_package

Step 3: Setup Nodejs and npm on local machine
sudo apt-gey update -y
sudo apt-get install nodejs npm -y

Step 4: Create NPM csv-to-dataframe library or module package
sudo npm init -y 

Edit package.json as mentioned in project root folder. 

Add function code in index.js as mentioned in root folder. 

Step 5: Push changes back to remote repo

sudo git add -A
sudo git commit -a -m "Added Package Version 1.0.0"
sudo push origin main

Step 6: Package and Publish NPM Package
sudo npm login --registry=https://npm.pkg.github.com
sudo npm publish

################### Steps to Test Code on Remote Machine############

Step 1: Prepare Environment
sudo apt-get update && sudo apt-get install nodejs npm -y
sudo git clone https://github.com/sreepathysois/nodejs_npm_csv_df_lib_package.git
cd nodejs_npm_csv_df_lib_package/test_package_code

Step 2: Create a Nodejs Project
sudo npm init -y 
Update package.json with dependency as mentioned in test_package_code/package.json  folder 
Create index.js project as mentioned in test_package_code/index.js
Prepare Datasets samples.csv 

Step 3: Test the package
node index.js

#######################################################################
