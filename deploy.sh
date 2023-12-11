# abort on errors
set -e

# build
npm run build
#git config --global --unset http.proxy
#git config --global --unset https.proxy
#git push origin --delete site
git subtree push --prefix docs/.vitepress/dist origin site

cd -
