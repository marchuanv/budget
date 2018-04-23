function waitForDirectory(){
	busy=$(lsof +D $1) | grep PID
	if [ -z "$busy" ]
	then
		echo "$1 directory not in use moving on..."
	else
		echo "waiting for processes using $1"
	    sleep 2
	fi
}

reset
sudo fuser -k 3600/tcp
sudo fuser -k 3600/tcp
sudo fuser -k 3600/tcp
export PORT
PORT=3600

export libraryregisters
libraryregisters='http://tidal:3000'

cd ./../libraryhost/
./setup.sh

cd ./../budget/

echo ""
echo "SETTING UP BUDGET"
echo ""

if [ -d "./node_modules" ] 
then
    echo "dependencies already installed moving on..." 
else
	echo "installing dependencies"
	npm install
fi

results=$(git status | grep "nothing to commit")
if [ ! -z "$results" -a "$results" != " " ]; then
	echo "nothing has changed moving on..."
else
	git pull origin master
	git add -A
	git commit -m "fix"
	git push origin master
	npm install
fi

mkdir -p ./../working

mv ./node_modules/* ./../working
waitForDirectory ./../working
waitForDirectory node_modules/

mv ./node_modules/.* ./../working
waitForDirectory ./../working
waitForDirectory node_modules/

git clean -fdx
mkdir ./node_modules

mv ./../working/* ./node_modules/
waitForDirectory ./../working
waitForDirectory node_modules/

mv ./../working/.* ./node_modules/
waitForDirectory ./../working
waitForDirectory node_modules/

npm update libraryhost

reset
echo ""
(nohup npm start /dev/null 2>&1 &)
echo ""
