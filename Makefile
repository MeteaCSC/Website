SRC = ./src

build: $(SRC)/index.ts $(SRC)/calendar.ts
	npx tsc

debug: build
	cp -R $(SRC)/* ./build/
	node build/index.js