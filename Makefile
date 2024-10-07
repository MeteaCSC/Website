SRC = ./src

build: $(SRC)/app.ts $(SRC)/calendar.ts
	npx tsc

debug: build
	cp -R $(SRC)/* ./build/
	node build/app.js

prod: build 
	cp -R $(SRC)/* ./build/
	node build/app.js 80
