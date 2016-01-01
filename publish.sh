git push; 
mv .git .git.bak; 
git init; 
git remote add origin git@github.com:borisschapira/blog.git; 
git add -A; 
git commit -m "Publication"; 
git push origin master --force;
rm -rf .git; 
mv .git.bak .git;
