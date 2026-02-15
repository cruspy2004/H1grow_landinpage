@echo off
echo === Initializing Git ===
git init
echo === Adding files ===
git add .
echo === Committing ===
git commit -m "Initial commit: H1Grow landing page"
echo === Setting branch to main ===
git branch -M main
echo === Adding remote ===
git remote add origin https://github.com/cruspy2004/H1grow_landinpage.git
echo === Pushing to GitHub ===
git push -u origin main
echo === Done ===
pause
